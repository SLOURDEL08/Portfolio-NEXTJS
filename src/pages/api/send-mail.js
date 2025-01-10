import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default async function handler(req, res) {
  try {
    console.log('Received feedback request:', req.method);
    console.log('Environment variables status:', {
      SMTP_HOST: !!process.env.SMTP_HOST,
      SMTP_PORT: !!process.env.SMTP_PORT,
      EMAIL_USER: !!process.env.EMAIL_USER,
      EMAIL_PASSWORD: !!process.env.EMAIL_PASSWORD,
    });

    // Vérifier la configuration SMTP avant de continuer
    try {
      await transporter.verify();
      console.log('SMTP connection verified');
    } catch (error) {
      console.error('SMTP verification failed:', error);
      return res.status(500).json({
        message: 'Server configuration error',
        error: 'SMTP verification failed',
      });
    }

    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Only POST requests allowed' });
    }

    console.log('Feedback request body:', req.body);

    const { name, email, message, rating } = req.body;

    if (!name || !email || !message || rating === undefined) {
      console.log('Missing required fields in feedback:', { name, email, message, rating });
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Vérification des variables d'environnement
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('Missing email credentials');
      return res.status(500).json({ message: 'Server configuration error' });
    }

    const mailOptions = {
      from: {
        name: 'Portfolio Feedback',
        address: process.env.EMAIL_USER,
      },
      to: process.env.EMAIL_USER,
      subject: `Portfolio Feedback from ${name}`,
      text: `
        Portfolio Feedback Details:
        
        Name: ${name}
        Email: ${email}
        Rating: ${rating}/5 stars
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nouveau Feedback Portfolio</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>De:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Note:</strong> ${rating}/5 stars</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-radius: 5px; border: 1px solid #eee;">
            <h3 style="color: #666;">Message:</h3>
            <p style="line-height: 1.6;">${message}</p>
          </div>
        </div>
      `,
      replyTo: email,
    };

    console.log('Mail options configured:', {
      from: !!mailOptions.from,
      to: !!mailOptions.to,
      subject: mailOptions.subject,
    });

    const info = await transporter.sendMail(mailOptions);
    console.log('Feedback email sent successfully:', info.response);
    res.status(200).json({ message: 'Feedback sent successfully' });
  } catch (error) {
    console.error('Error details:', error);
    res.status(500).json({
      message: 'Error sending feedback',
      error: error.message,
      details: error.toString(),
    });
  }
}
