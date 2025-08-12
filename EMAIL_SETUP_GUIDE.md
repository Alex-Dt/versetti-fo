# Email Setup Guide for Versetti Family Office Contact Form

This guide will help you set up email sending functionality for your contact form using AWS services.

## Prerequisites

1. **AWS Account** with appropriate permissions
2. **AWS Amplify CLI** installed and configured
3. **Amazon SES** access in your AWS region

## Setup Steps

### 1. Initialize Amplify Backend (if not already done)

```bash
# Install Amplify CLI if not already installed
npm install -g @aws-amplify/cli

# Initialize Amplify in your project
amplify init
```

### 2. Set Up Amazon SES

**Option A: Domain Verification (Recommended)**:
1. Go to AWS SES Console → "Verified identities"
2. Click "Create identity" → Select "Domain"
3. Enter `versetti.co`
4. Add the provided DNS records to your domain (wherever you manage DNS)
5. This allows sending from ANY @versetti.co email address

**Option B: Individual Email Verification**:
1. Go to AWS SES Console → "Verified identities"  
2. Click "Create identity" → Select "Email address"
3. Verify `admin@versetti.co` (your existing Google Workspace email)
4. Optionally verify `noreply@versetti.co` (no mailbox needed)

2. **Request Production Access** (if needed):
   - By default, SES is in sandbox mode
   - To send emails to unverified addresses, request production access
   - Go to SES Console → Account dashboard → Request production access

### 3. Deploy Backend Resources

```bash
# Add the function and API to your Amplify project
amplify push
```

### 4. Configure Environment Variables

After deployment, you'll get an API Gateway endpoint. Add it to your environment:

1. **For local development**, create `.env.local`:
```
VITE_API_ENDPOINT=https://your-api-id.execute-api.us-east-1.amazonaws.com/prod
```

2. **For Amplify deployment**:
   - Go to AWS Amplify Console
   - Select your app
   - Go to "Environment variables"
   - Add: `VITE_API_ENDPOINT` with your API Gateway URL

### 5. Update Email Configuration

In the Lambda function CloudFormation template, update these environment variables:
- `FROM_EMAIL`: Change to your verified sender email
- `TO_EMAIL`: Change to where you want to receive contact form submissions

### 6. Test the Setup

1. Deploy your changes to Amplify
2. Visit your website
3. Fill out the contact form
4. Check that emails are received at your configured email address

## Architecture Overview

```
Contact Form (React) 
    ↓ HTTP POST
API Gateway (/contact endpoint)
    ↓ Invokes
AWS Lambda Function
    ↓ Sends email via
Amazon SES
    ↓ Delivers to
Your Email Inbox
```

## Troubleshooting

### Common Issues:

1. **"Email not verified" error**:
   - Ensure both sender and recipient emails are verified in SES
   - Check SES sandbox status

2. **CORS errors**:
   - The Lambda function includes CORS headers
   - Ensure API Gateway is properly configured

3. **Lambda timeout**:
   - Current timeout is set to 25 seconds
   - Increase if needed in the CloudFormation template

4. **Permission errors**:
   - Ensure Lambda execution role has SES permissions
   - Check CloudWatch logs for detailed error messages

### Monitoring:

- **CloudWatch Logs**: Check Lambda function logs
- **SES Sending Statistics**: Monitor email delivery rates
- **API Gateway Metrics**: Track API usage and errors

## Cost Considerations

- **Lambda**: First 1M requests/month are free
- **API Gateway**: First 1M API calls/month are free  
- **SES**: First 62,000 emails/month are free
- **CloudWatch**: Basic monitoring included

## Security Best Practices

1. **Rate Limiting**: Consider adding rate limiting to prevent spam
2. **Input Validation**: Lambda function validates email format and required fields
3. **HTTPS Only**: All communications use HTTPS
4. **IAM Permissions**: Lambda has minimal required permissions

## Next Steps

1. Consider adding email templates for better formatting
2. Implement email delivery notifications
3. Add analytics tracking for form submissions
4. Set up monitoring alerts for failed emails
