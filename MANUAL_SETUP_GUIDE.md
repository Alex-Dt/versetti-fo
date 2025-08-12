# Manual AWS Setup Guide - Contact Form Email Backend

Since the automated Amplify backend deployment failed due to permissions, here's how to set up the Lambda function and API Gateway manually.

## Step 1: Create Lambda Function

1. **Go to [AWS Lambda Console](https://console.aws.amazon.com/lambda/)**
2. **Click "Create function"**
3. **Configure**:
   - Function name: `contactFormHandler`
   - Runtime: `Node.js 18.x`
   - Architecture: `x86_64`
   - Click "Create function"

4. **Replace the default code** with this Lambda function code:

```javascript
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
      Source: process.env.FROM_EMAIL || 'noreply@versetti.co',
      Destination: {
        ToAddresses: [process.env.TO_EMAIL || 'admin@versetti.co']
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
      ReplyToAddresses: [email]
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
```

5. **Click "Deploy"** to save the function

## Step 2: Add Environment Variables

1. **In the Lambda function**, go to "Configuration" → "Environment variables"
2. **Add these variables**:
   - `FROM_EMAIL`: `noreply@versetti.co`
   - `TO_EMAIL`: `admin@versetti.co`

**Note**: Don't add `AWS_REGION` - it's automatically provided by Lambda

## Step 3: Add SES Permissions

1. **Go to "Configuration" → "Permissions"**
2. **Click on the execution role name** (opens IAM)
3. **Click "Add permissions" → "Attach policies"**
4. **Search for and attach**: `AmazonSESFullAccess`
5. **Click "Add permissions"**

## Step 4: Create API Gateway

1. **Go to [API Gateway Console](https://console.aws.amazon.com/apigateway/)**
2. **Click "Create API"**
3. **Choose "REST API" → "Build"**
4. **Configure**:
   - API name: `contact-form-api`
   - Endpoint Type: `Regional`
   - Click "Create API"

## Step 5: Create API Resource and Method

1. **Click "Actions" → "Create Resource"**
2. **Configure**:
   - Resource Name: `contact`
   - Resource Path: `/contact`
   - Enable CORS: ✅ Check this box
   - Click "Create Resource"

3. **Select the `/contact` resource**
4. **Click "Actions" → "Create Method"**
5. **Select "POST" from dropdown → Click checkmark**
6. **Configure**:
   - Integration type: `Lambda Function`
   - Use Lambda Proxy integration: ✅ Check this box
   - Lambda Region: `us-east-1`
   - Lambda Function: `contactFormHandler`
   - Click "Save"
   - Click "OK" to give API Gateway permission to invoke Lambda

## Step 6: Enable CORS

1. **Select the `/contact` resource**
2. **Click "Actions" → "Enable CORS"**
3. **Configure**:
   - Access-Control-Allow-Origin: `*`
   - Access-Control-Allow-Headers: `Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token`
   - Access-Control-Allow-Methods: `GET,POST,OPTIONS`
4. **Click "Enable CORS and replace existing CORS headers"**

## Step 7: Deploy API

1. **Click "Actions" → "Deploy API"**
2. **Configure**:
   - Deployment stage: `[New Stage]`
   - Stage name: `prod`
   - Click "Deploy"

3. **Copy the Invoke URL** - this is your `VITE_API_ENDPOINT`!
   - Format: `https://abc123def4.execute-api.us-east-1.amazonaws.com/prod`

## Step 8: Configure Amplify Environment Variable

1. **Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)**
2. **Select your app → "Environment variables"**
3. **Add**:
   - Key: `VITE_API_ENDPOINT`
   - Value: `https://your-api-id.execute-api.us-east-1.amazonaws.com/prod`
4. **Save and redeploy**

## Step 9: Test

1. **Visit your website**
2. **Fill out the contact form**
3. **Check your `admin@versetti.co` inbox**

## Troubleshooting

- **CORS errors**: Make sure CORS is enabled on the API Gateway resource
- **Permission errors**: Ensure Lambda has SES permissions
- **Email not received**: Check CloudWatch logs in Lambda function
- **SES errors**: Ensure domain/email is verified in SES

## Total Time: ~15-20 minutes

This manual setup bypasses the Amplify permissions issue and gives you full control over the resources.
