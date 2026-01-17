import nodemailer from 'nodemailer';
import { GOOGLE_EMAIL, GOOGLE_EMAIL_PASSWORD, MAIL_HOST, MAIL_PORT } from '$env/static/private';

export async function POST({ request }) {
  try {
    const formData = await request.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: MAIL_HOST,
      port: parseInt(MAIL_PORT),
      secure: false, // true for 465, false for other ports
      auth: {
        user: GOOGLE_EMAIL,
        pass: GOOGLE_EMAIL_PASSWORD
      }
    });

    // Email content
    const mailOptions = {
      from: `"Sunny Days Contact Form" <${GOOGLE_EMAIL}>`,
      to: 'mrmichael423@icloud.com',
      subject: `New Contact Form Submission - ${formData.firstName} ${formData.lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Preferred Contact:</strong> ${formData.preferredContact}</p>
        <p><strong>Best Time to Call:</strong> ${formData.bestTimeToCall || 'Not specified'}</p>
        <p><strong>Service of Interest:</strong> ${formData.serviceInterest || 'Not specified'}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `,
      text: `
        New Contact Form Submission

        Name: ${formData.firstName} ${formData.lastName}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Preferred Contact: ${formData.preferredContact}
        Best Time to Call: ${formData.bestTimeToCall || 'Not specified'}
        Service of Interest: ${formData.serviceInterest || 'Not specified'}

        Message:
        ${formData.message}
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Email error:', error);
    // @ts-ignore
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
