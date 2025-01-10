import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default async function handler(req, res) {
  console.log('Received request:', req.method);

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  console.log('Request body:', req.body);

  const { firstName, lastName, email, message, enterprise } = req.body;

  if (!firstName || !lastName || !email || !message) {
    console.log('Missing required fields');
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: `Message from ${firstName} ${lastName}`,
    text: `
      Name: ${firstName} ${lastName}
      Enterprise: ${enterprise || 'Not specified'}
      Email: ${email}
      Message: ${message}
    `,
    html: `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Enterprise:</strong> ${enterprise || 'Not specified'}</p>
      <p><strong>Email:</strong> ${email}</p>
      <h3>Message:</h3>
      <p>${message}</p>
    `,
  };

  console.log('Mail options:', mailOptions);

  try {
    console.log('Attempting to send email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error details:', error);
    res.status(500).json({ message: 'Error sending email', error: error.message });
  }
}
