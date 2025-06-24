# gmail-nodemailer-test
This project demonstrates how to send automated emails using Node.js + Nodemailer + Gmail SMTP. It uses an App Password (instead of normal login) for secure and reliable email delivery without needing Gmail API setup.

**Today I explored how to send emails through automation using Node.js, Gmail SMTP & Nodemailer!**
As part of a self-learning experiment, I created a script that:
📬 Logs into my Gmail account using an App Password
📧 Sends an email to myself
✅ Verifies the email content
📦 Uses Nodemailer with Gmail’s SMTP server


**Tech Used:**
Node.js
Nodemailer
Gmail SMTP
App Passwords (with 2FA enabled)


**Key Takeaways:**
SMTP (Simple Mail Transfer Protocol) is a powerful way to send emails programmatically.
Gmail requires App Passwords if you're using third-party tools like Nodemailer.
This approach is helpful for sending automated reports, test results, or alerts during automation.

**Steps I Followed:**

**1. Install Nodemailer:**
      npm install nodemailer
**2. Enable 2-Step Verification in Gmail**
     Then generate an App Password from:
     https://myaccount.google.com/apppasswords
**3. Create a file sendEmail.js with the following code:**
    const nodemailer = require("nodemailer");
    const userEmail = "your_email@gmail.com"; // replace with your email const appPassword = "your_generated_app_password"; // NOT your Gmail passwordconst transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: userEmail,
        pass: appPassword,
      },
    });
    const mailOptions = {
      from: userEmail,
      to: userEmail, // send to selfsubject: "Test Mail from Automation Script",
      text: "This is a test email sent using Node.js + Gmail SMTP + App Password.",
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log("Error:", error);
      }
      console.log("Email sent:", info.response);
    }); 

**4. Run your script:**
    node sendEmail.js


**Result**:
Email delivered successfully to my Gmail inbox.

**Pros:**
Free & Easy to set up
No need for Google Cloud billing or OAuth setup
Useful for automated test notifications & CI/CD alerts
Secure with Gmail App Passwords
Works well for small-scale email use-cases


**Cons:**
Cannot read inbox emails (Send only)
Gmail SMTP has sending limits (~500 emails/day)
Needs manual setup of App Passwords (only works with 2FA enabled)
Not suitable for high-volume or transactional systems
Less flexibility than Gmail API (e.g., no label, thread, or read access)


![Uploading image.png…]()




















![image](https://github.com/user-attachments/assets/c246bb86-dfa2-4529-8b61-ed9cf79610bd)
