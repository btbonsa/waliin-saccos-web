const nodemailer = require("nodemailer");

const RECIPIENT_EMAIL = process.env.CONTACT_EMAIL || "hailudelesa16@gmail.com";

function buildTransporter() {
  const gmailUser = process.env.MAIL_USER;
  const gmailPass = process.env.MAIL_PASS;

  if (!gmailUser || !gmailPass) {
    throw new Error(
      "Email credentials are not configured. Set MAIL_USER and MAIL_PASS in the backend environment."
    );
  }

  return nodemailer.createTransport({
    host: process.env.MAIL_HOST || "smtp.gmail.com",
    port: Number(process.env.MAIL_PORT || 587),
    secure: Number(process.env.MAIL_PORT || 587) === 465,
    auth: {
      user: gmailUser,
      pass: gmailPass,
    },
  });
}

exports.sendContactMessage = async (req, res, next) => {
  try {
    const { full_name, email, phone, message } = req.body || {};

    if (!full_name || !email || !message) {
      return res.status(400).json({
        message: "Full name, email, and message are required.",
      });
    }

    const transporter = buildTransporter();

    await transporter.sendMail({
      from: `"${full_name}" <${email}>`,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `New contact message from ${full_name}`,
      text: [
        `Name: ${full_name}`,
        `Email: ${email}`,
        `Phone: ${phone || "N/A"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0e241d;">
          <h3 style="margin-bottom: 12px;">New contact message</h3>
          <p><strong>Name:</strong> ${full_name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "N/A"}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return res.status(200).json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact email error:", error);
    return res.status(500).json({
      message: "Something went wrong. Please try again.",
    });
  }
};
