import nodemailer from 'nodemailer';

// Nodemailer transporter with credentials from environment variables
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { firstName, lastName, email, message, country, city, enterprise } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_TO, // Use environment variable for recipient email
    subject: `Message from ${firstName} ${lastName}`,
    text: `
      Name: ${firstName} ${lastName}
      Enterprise: ${enterprise}
      Email: ${email}
      Country: ${country.label}
      City: ${city}
      Message: ${message}
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
}
