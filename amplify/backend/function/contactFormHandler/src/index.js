const AWS = require('aws-sdk');

// Configure AWS SES
const ses = new AWS.SES({
  region: process.env.AWS_REGION || 'us-east-1'
});

exports.handler = async (event) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    // Parse the request body
    const body = JSON.parse(event.body);
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          error: 'Missing required fields: name, email, and message are required'
        })
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          error: 'Invalid email format'
        })
      };
    }

    // Email parameters
    const emailParams = {
      Source: process.env.FROM_EMAIL, // Must be verified in SES
      Destination: {
        ToAddresses: [process.env.TO_EMAIL] // Where to send the contact form
      },
      Message: {
        Subject: {
          Data: `New Contact Form Submission from ${name}`,
          Charset: 'UTF-8'
        },
        Body: {
          Html: {
            Data: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, '<br>')}</p>
              <hr>
              <p><small>Sent from Versetti Family Office website</small></p>
              <p><small><strong>Reply directly to this email</strong> to respond to ${name} at ${email}</small></p>
            `,
            Charset: 'UTF-8'
          },
          Text: {
            Data: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Message: ${message}

Sent from Versetti Family Office website
Reply directly to this email to respond to ${name} at ${email}
            `,
            Charset: 'UTF-8'
          }
        }
      },
      ReplyToAddresses: [email] // Allow replying directly to the sender
    };

    // Send the email
    const result = await ses.sendEmail(emailParams).promise();
    
    console.log('Email sent successfully:', result.MessageId);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Email sent successfully',
        messageId: result.MessageId
      })
    };

  } catch (error) {
    console.error('Error sending email:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: 'Failed to send email. Please try again later.'
      })
    };
  }
};
