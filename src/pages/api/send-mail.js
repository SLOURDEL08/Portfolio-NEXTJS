import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.ionos.fr', // Server IONOS France
  port: 465, // Port SSL pour IONOS France
  secure: true, // true pour 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    // Nécessaire dans certains environnements
    rejectUnauthorized: false,
  },
});

export default async function handler(req, res) {
  try {
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

    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const mailOptions = {
      from: {
        name: 'Portfolio Contact',
        address: process.env.EMAIL_USER,
      },
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Nouveau message de ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nouveau Message Portfolio</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Nom:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Entreprise:</strong> ${enterprise || 'Non spécifié'}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-radius: 5px; border: 1px solid #eee;">
            <h3 style="color: #666;">Message:</h3>
            <p style="line-height: 1.6;">${message}</p>
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
