import nodemailer from 'nodemailer';
import { rateLimitMiddleware } from './rate-limit';

// Validation d'email
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Nettoyage des entrées
const sanitizeInput = (str) => {
  return str
    .trim()
    .replace(/[<>]/g, '') // Retire les balises HTML basiques
    .slice(0, 1000); // Limite la longueur
};

const transporter = nodemailer.createTransport({
  host: 'smtp.ionos.fr',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export default async function handler(req, res) {
  try {
    // Appliquer le rate limiting existant
    await rateLimitMiddleware(req, res);

    console.log('Received request:', req.method);
    console.log('Using email configuration:', {
      host: 'smtp.ionos.fr',
      port: 465,
      user: process.env.EMAIL_USER?.substring(0, 3) + '***',
      secure: true,
    });

    // Vérifier la méthode
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Only POST requests allowed' });
    }

    // Vérifier le Content-Type
    if (!req.headers['content-type']?.includes('application/json')) {
      return res.status(400).json({ message: 'Content-Type must be application/json' });
    }

    // Vérifier les variables d'environnement
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('Missing email credentials');
      return res.status(500).json({ message: 'Server configuration error - missing credentials' });
    }

    // Vérifier la connexion SMTP
    try {
      const verifyResult = await transporter.verify();
      console.log('SMTP connection verified successfully:', verifyResult);
    } catch (verifyError) {
      console.error('SMTP verification error details:', {
        message: verifyError.message,
        code: verifyError.code,
        command: verifyError.command,
      });
      return res.status(500).json({
        message: 'SMTP connection failed',
        error: verifyError.message,
      });
    }

    const { firstName, lastName, email, message, enterprise } = req.body;

    // Validation des champs requis
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Validation de l'email
    if (!isValidEmail(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    // Validation des longueurs
    if (firstName.length > 50 || lastName.length > 50 || message.length > 5000) {
      return res.status(400).json({ message: 'Input length exceeds maximum' });
    }

    // Nettoyer les entrées
    const sanitizedData = {
      firstName: sanitizeInput(firstName),
      lastName: sanitizeInput(lastName),
      email: email.trim().toLowerCase(),
      message: sanitizeInput(message),
      enterprise: enterprise ? sanitizeInput(enterprise) : '',
    };

    const mailOptions = {
      from: {
        name: 'Portfolio Contact',
        address: process.env.EMAIL_USER,
      },
      to: process.env.EMAIL_USER,
      replyTo: sanitizedData.email,
      subject: `Nouveau message de ${sanitizedData.firstName} ${sanitizedData.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nouveau Message Portfolio</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Nom:</strong> ${sanitizedData.firstName} ${sanitizedData.lastName}</p>
            <p><strong>Email:</strong> ${sanitizedData.email}</p>
            <p><strong>Entreprise:</strong> ${sanitizedData.enterprise || 'Non spécifié'}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-radius: 5px; border: 1px solid #eee;">
            <h3 style="color: #666;">Message:</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${sanitizedData.message}</p>
          </div>
          
          <div style="margin-top: 20px; font-size: 12px; color: #666;">
            <p>Message envoyé via le formulaire de contact du portfolio</p>
            <p>IP: ${req.headers['x-forwarded-for'] || req.socket.remoteAddress}</p>
            <p>Date: ${new Date().toLocaleString('fr-FR')}</p>
          </div>
        </div>
      `,
    };

    console.log('Attempting to send email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error in handler:', {
      message: error.message,
      code: error.code,
      command: error.command,
    });
    res.status(500).json({
      message: 'Error sending email',
      error: error.message,
      details: error.toString(),
    });
  }
}
