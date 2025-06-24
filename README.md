# 📧 Gmail Nodemailer Test

This project demonstrates how to send automated emails using **Node.js**, **Nodemailer**, and **Gmail SMTP**. It uses an **App Password** (instead of your actual Gmail password) for secure and reliable email delivery.

---

## Today I explored how to send emails through automation using Node.js, Gmail SMTP & Nodemailer!

As part of a self-learning experiment, I created a script that:

- Logs into my Gmail account using an App Password
- Sends an email to myself
- Verifies the email content
- Uses Nodemailer with Gmail’s SMTP server

---

## Tech Used:

- Node.js
- Nodemailer
- Gmail SMTP
- App Passwords (with 2FA enabled)

---

## Key Takeaways:

- **SMTP** (Simple Mail Transfer Protocol) is a powerful way to send emails programmatically.
- Gmail requires **App Passwords** if you're using third-party tools like Nodemailer.
- This approach is helpful for sending automated reports, test results, or alerts during automation.

---

##  Steps I Followed:

### 1. Install Nodemailer:
```bash
npm install nodemailer
```

### 2. Enable 2-Step Verification in Gmail
  Then generate an App Password from:(https://myaccount.google.com/apppasswords)

### 3. Create a file sendEmail.js with the following code:
```js
    const nodemailer = require("nodemailer");
    
    const userEmail = "your_email@gmail.com"; // replace with your Gmail
    const appPassword = "your_generated_app_password"; // App Password, not Gmail login
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: userEmail,
        pass: appPassword,
      },
    });
    
    const mailOptions = {
      from: userEmail,
      to: userEmail, // sending to self
      subject: " Test Mail from Automation Script",
      text: "This is a test email sent using Node.js + Gmail SMTP + App Password.",
    };
    ![458197856-c246bb86-dfa2-4529-8b61-ed9cf79610bd](https://github.com/user-attachments/assets/9cb9d403-6b80-430d-abb3-d001a3cce710)
        return console.log("Error:", error);
      }
      console.log("Email sent:", info.response);
    });
```

### 4. Run your script:
```bash
  node sendEmail.js
```

### 5. Result:
Email delivered successfully to my Gmail inbox! 🎉

### Pros:
- Free & Easy to set up
- No need for Google OAuth setup
- Great for automation: reports, CI/CD alerts
- Secure via Gmail App Passwords
- Perfect for small-scale test scripts

### Cons:
- Cannot read emails (only sending)
- Gmail SMTP has daily send limits (~500 emails/day)
- Needs 2FA and App Password setup
- Not ideal for high-volume apps
- Less flexible than Gmail API (no threads, labels)

![458197856-c246bb86-dfa2-4529-8b61-ed9cf79610bd](https://github.com/user-attachments/assets/6b62b5e7-9a5f-4ba9-a15a-d77c3ce17051)
