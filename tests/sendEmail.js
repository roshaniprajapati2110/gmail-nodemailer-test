const nodemailer = require("nodemailer");

const userEmail = "roshaniPrajapati2110@gmail.com";
const appPassword = "*****";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: userEmail,
    pass: appPassword,
  },
});

const mailOptions = {
  from: userEmail,
  to: userEmail, // send to self
  subject: "Test Mail from Automation Script",
  text: "This is a test email sent using Node.js + Gmail SMTP + App Password.",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log("Error:", error);
  }
  console.log("Email sent:", info.response);
});
