// Email template HTML content stored as constants

export const waitlistEmailHtml = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Welcome to the NordicPro Waitlist</title>
<style>
  /* Base styles */
  body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #2C2C2C;
    background-color: #F5F5F5;
    margin: 0;
    padding: 0;
  }
  
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .email-wrapper {
    background-color: #FFFFFF;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }
  
  .header {
    background-color: #007BFF;
    padding: 30px 20px;
    text-align: center;
  }
  
  .logo {
    font-size: 28px;
    font-weight: bold;
    color: #FFFFFF;
    margin: 0;
  }
  
  .content {
    padding: 30px 20px;
  }
  
  h1 {
    color: #007BFF;
    font-size: 24px;
    margin-top: 0;
    margin-bottom: 20px;
  }
  
  p {
    margin-bottom: 16px;
  }
  
  .highlight {
    background-color: #F5F9FF;
    border-left: 4px solid #007BFF;
    padding: 15px;
    margin-bottom: 20px;
  }
  
  .button {
    display: inline-block;
    background-color: #FF4500;
    color: #FFFFFF;
    text-decoration: none;
    padding: 12px 24px;
    border-radius: 50px;
    font-weight: bold;
    margin-top: 10px;
  }
  
  .info-box {
    background-color: #F5F9FF;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 20px;
  }
  
  .info-label {
    font-weight: bold;
    color: #007BFF;
    margin-bottom: 5px;
  }
  
  .footer {
    background-color: #F5F5F5;
    padding: 20px;
    text-align: center;
    font-size: 14px;
    color: #666666;
  }
  
  .social-links {
    margin-top: 15px;
  }
  
  .social-link {
    display: inline-block;
    margin: 0 10px;
    color: #007BFF;
    text-decoration: none;
  }
  
  @media only screen and (max-width: 600px) {
    .container {
      width: 100%;
      padding: 10px;
    }
    
    .content {
      padding: 20px 15px;
    }
  }
</style>
</head>
<body>
<div class="container">
  <div class="email-wrapper">
    <div class="header">
      <h1 class="logo">NordicPro</h1>
    </div>
    
    <div class="content">
      <h1>Welcome to the NordicPro Waitlist, {{to_name}}!</h1>
      
      <p>Thank you for joining our waitlist! We're excited to have you on board as we prepare to launch NordicPro - the platform that puts mental health, motivation, and team management in one place.</p>
      
      <div class="highlight">
        <p>You're now officially on our waitlist and will be among the first to know when we launch. We may also reach out to you for early access opportunities.</p>
      </div>
      
      <h2 style="color: #007BFF; font-size: 18px;">Your Information</h2>
      
      <div class="info-box">
        <p><span class="info-label">Role:</span> {{role}}</p>
        <p><span class="info-label">Team Size:</span> {{team_size}}</p>
        <p><span class="info-label">Interests:</span> {{interests}}</p>
      </div>
      
      <p>While you wait, follow us on social media to stay updated on our progress and learn more about how NordicPro is transforming youth sports.</p>
      
      <div style="text-align: center; margin: 30px 0;">
        <a href="https://nordicpro.com/blog" class="button">Visit Our Blog</a>
      </div>
      
      <p>If you have any questions or would like to learn more, feel free to reply to this email or contact us at <a href="mailto:support@nordicpro.com" style="color: #007BFF;">support@nordicpro.com</a>.</p>
      
      <p>Best regards,<br>The NordicPro Team</p>
    </div>
    
    <div class="footer">
      <p>© 2025 NordicPro. All rights reserved.</p>
      <p>You're receiving this email because you signed up for the NordicPro waitlist.</p>
      <div class="social-links">
        <a href="#" class="social-link">Twitter</a>
        <a href="#" class="social-link">Facebook</a>
        <a href="#" class="social-link">Instagram</a>
      </div>
    </div>
  </div>
</div>
</body>
</html>`;

export const partnerEmailHtml = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NordicPro Partnership Request Received</title>
<style>
  /* Base styles */
  body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #2C2C2C;
    background-color: #F5F5F5;
    margin: 0;
    padding: 0;
  }
  
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .email-wrapper {
    background-color: #FFFFFF;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }
  
  .header {
    background-color: #FF4500;
    padding: 30px 20px;
    text-align: center;
  }
  
  .logo {
    font-size: 28px;
    font-weight: bold;
    color: #FFFFFF;
    margin: 0;
  }
  
  .content {
    padding: 30px 20px;
  }
  
  h1 {
    color: #FF4500;
    font-size: 24px;
    margin-top: 0;
    margin-bottom: 20px;
  }
  
  p {
    margin-bottom: 16px;
  }
  
  .highlight {
    background-color: #FFF5F0;
    border-left: 4px solid #FF4500;
    padding: 15px;
    margin-bottom: 20px;
  }
  
  .button {
    display: inline-block;
    background-color: #007BFF;
    color: #FFFFFF;
    text-decoration: none;
    padding: 12px 24px;
    border-radius: 50px;
    font-weight: bold;
    margin-top: 10px;
  }
  
  .info-box {
    background-color: #FFF5F0;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 20px;
  }
  
  .info-label {
    font-weight: bold;
    color: #FF4500;
    margin-bottom: 5px;
  }
  
  .footer {
    background-color: #F5F5F5;
    padding: 20px;
    text-align: center;
    font-size: 14px;
    color: #666666;
  }
  
  .social-links {
    margin-top: 15px;
  }
  
  .social-link {
    display: inline-block;
    margin: 0 10px;
    color: #007BFF;
    text-decoration: none;
  }
  
  @media only screen and (max-width: 600px) {
    .container {
      width: 100%;
      padding: 10px;
    }
    
    .content {
      padding: 20px 15px;
    }
  }
</style>
</head>
<body>
<div class="container">
  <div class="email-wrapper">
    <div class="header">
      <h1 class="logo">NordicPro</h1>
    </div>
    
    <div class="content">
      <h1>Thank You for Your Partnership Interest, {{to_name}}!</h1>
      
      <p>We're excited about your interest in partnering with NordicPro! We've received your partnership request for {{organization_name}} and our team is reviewing your information.</p>
      
      <div class="highlight">
        <p>A member of our partnerships team will be in touch with you within 2 business days to discuss potential collaboration opportunities and next steps.</p>
      </div>
      
      <h2 style="color: #FF4500; font-size: 18px;">Partnership Information</h2>
      
      <div class="info-box">
        <p><span class="info-label">Organization:</span> {{organization_name}}</p>
        <p><span class="info-label">Organization Type:</span> {{organization_type}}</p>
        <p><span class="info-label">Team Count:</span> {{team_count}}</p>
        <p><span class="info-label">Player Count:</span> {{player_count}}</p>
        <p><span class="info-label">Partnership Goals:</span> {{partnership_goals}}</p>
      </div>
      
      <p>While you wait to hear from us, you might be interested in learning more about our approach to youth sports and mental health:</p>
      
      <div style="text-align: center; margin: 30px 0;">
        <a href="https://nordicpro.com/resources" class="button">Explore Our Resources</a>
      </div>
      
      <p>If you have any immediate questions or would like to provide additional information, please reply to this email or contact our partnerships team at <a href="mailto:partnerships@nordicpro.com" style="color: #FF4500;">partnerships@nordicpro.com</a>.</p>
      
      <p>We look forward to exploring how we can work together to support youth athletes!</p>
      
      <p>Best regards,<br>The NordicPro Partnerships Team</p>
    </div>
    
    <div class="footer">
      <p>© 2025 NordicPro. All rights reserved.</p>
      <p>You're receiving this email because you submitted a partnership request.</p>
      <div class="social-links">
        <a href="#" class="social-link">Twitter</a>
        <a href="#" class="social-link">Facebook</a>
        <a href="#" class="social-link">Instagram</a>
      </div>
    </div>
  </div>
</div>
</body>
</html>`;

// You could also add metadata about each template
export const emailTemplateData = {
  waitlist: {
    id: "waitlist",
    name: "Waitlist Confirmation",
    description: "Sent to users after they join the NordicPro waitlist.",
    primaryColor: "#007BFF",
    usage: [
      "Confirms successful waitlist registration",
      "Provides a summary of the user's information",
      "Sets expectations for next steps",
      "Encourages social sharing",
    ],
    keyElements: [
      "Blue header with logo",
      "Personalized greeting",
      "Information summary box",
      "Call-to-action button",
      "Social sharing links",
    ],
  },
  partner: {
    id: "partner",
    name: "Partner Application Confirmation",
    description:
      "Sent to organizations after submitting a partnership application.",
    primaryColor: "#FF4500",
    usage: [
      "Confirms receipt of partnership application",
      "Summarizes the organization's information",
      "Sets expectations for response timeline",
      "Provides additional resources",
    ],
    keyElements: [
      "Orange header with logo",
      "Personalized greeting",
      "Organization information summary",
      "Next steps timeline",
      "Resources button",
    ],
  },
};
