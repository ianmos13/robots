import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendEmail({ from, to, subject, text, html }) {
  const mailOptions = {
    from: from || `<${process.env.EMAIL_USER}>`,
    to: to || process.env.EMAIL_TO,
    subject,
    text,
    ...(html && { html }),
  };

  return transporter.sendMail(mailOptions);
}
