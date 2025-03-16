import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { z } from "zod"

const emailSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json()

    // Validate the data
    const result = emailSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json({ error: "Invalid form data. Please check your inputs." }, { status: 400 })
    }

    const { name, email, subject, message } = result.data

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER || "smtp.example.com",
      port: Number.parseInt(process.env.EMAIL_PORT || "587"),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Set up email data
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_RECIPIENT || "your-email@example",
      subject: `Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)

    return NextResponse.json({ error: "Failed to send email. Please try again later." }, { status: 500 })
  }
}

