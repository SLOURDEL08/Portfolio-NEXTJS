// pages/api/send-mail-feedback.ts

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default async function handler(req, res) {
  console.log('Received feedback request:', req.method);

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  console.log('Feedback request body:', req.body);

  const { name, email, message, rating } = req.body;

  if (!name || !email || !message || !rating) {
    console.log('Missing required fields in feedback');
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
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
      <h2>Portfolio Feedback</h2>
      
      <p><strong>From:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Rating:</strong> ${rating}/5 stars</p>
      
      <h3>Message:</h3>
      <p>${message}</p>
    `,
  };

  console.log('Feedback mail options:', mailOptions);

  try {
    console.log('Attempting to send feedback email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Feedback email sent successfully:', info.response);
    res.status(200).json({ message: 'Feedback sent successfully' });
  } catch (error) {
    console.error('Error details:', error);
    res.status(500).json({ message: 'Error sending feedback', error: error.message });
  }
}
