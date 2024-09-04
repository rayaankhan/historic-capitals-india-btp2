import express, { json } from 'express';
import process from 'process'; // Add this line to import the process object
const app = express();
const port = process.env.PORT || 3000;
import cors from 'cors';
import nodemailer from 'nodemailer';
import 'dotenv/config'; // Load environment variables from .env file

// Middleware
app.use(cors());

// Middleware
app.use(json()); // For parsing application/json

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Define routes
app.post('/sendmail', (req, res) => {
  var { name, email, message } = req.body;
  var mailOptions = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject: "Automated Feedback Acknowledgement",
    text: `Dear ${name},

Thank you for reaching out and providing your feedback. We appreciate the time you took to share your thoughts with us.

We want you to know that your feedback is important to us and will be reviewed by our team. We are committed to continuously improving our services and will take your input into consideration.

Please note that this is an automated response, and no further action is required on your part. If you have any urgent concerns or need additional assistance, feel free to contact us directly through our support channels.

Thank you once again for your feedback.

Your feedback is provided below:
${message}

Best regards,
BTP-2`,
  }
  

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent');
    }
  }
)
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
