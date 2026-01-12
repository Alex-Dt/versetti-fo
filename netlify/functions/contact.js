const { Resend } = require('resend');

exports.handler = async (event) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { name, email, message, vacancy, resumeLink } = JSON.parse(event.body);

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const adminEmail = process.env.ADMIN_EMAIL || 'contact@versetti.co';

    // Build email content
    let emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${vacancy ? `<p><strong>Vacancy:</strong> ${vacancy}</p>` : ''}
      ${resumeLink ? `<p><strong>Resume Link:</strong> <a href="${resumeLink}">${resumeLink}</a></p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Versetti Contact <onboarding@resend.dev>';
    
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [adminEmail],
      replyTo: email,
      subject: vacancy 
        ? `Job Application: ${vacancy} - ${name}` 
        : `Contact Form: ${name}`,
      html: emailContent,
    });

    if (error) {
      console.error('Resend error:', error);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ success: false, error: error.message }),
      };
    }

    console.log('Email sent:', data);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, message: 'Email sent successfully' }),
    };

  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ success: false, error: 'Failed to send email' }),
    };
  }
};
