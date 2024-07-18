import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  console.log("Received request:", req.method, req.url); // Log request details

  if (req.method === "POST") {
    const { firstname, lastname, email, phone, service, message } = req.body;

    const emailContent = `
      First Name: ${firstname}\n
      Last Name: ${lastname}\n
      Email: ${email}\n
      Phone: ${phone}\n
      Service: ${service}\n
      Message: ${message}
    `;

    try {
      // console.log("Sending email with the following content:", emailContent);

      await resend.emails.send({
        from: "Contact from <onboarding@resend.dev>",
        to: "harrypotter12012000@gmail.com",
        subject: `New Contact Form Submission: ${service}`,
        text: emailContent,
      });

      // console.log("Email sent successfully");
      res.status(200).json({ success: true });
    } catch (error) {
      // console.error("Failed to send email:", error.message);
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    // console.log("Method not allowed");
    res.status(405).json({ message: "Method not allowed" });
  }
}
