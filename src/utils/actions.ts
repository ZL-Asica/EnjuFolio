'use server'

import process from 'node:process'
import nodemailer from 'nodemailer'
import { formatTimeLeft } from './dateUtils'

const RATE_LIMIT_WINDOW = 1000 * 60 * 5 // 5 minutes

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/.test(email)

export const handleSubmit = async (prevState: any, formData: FormData) => {
  const rateLimit = formData.get('rateLimit')
  const name = formData.get('name')
  const email = formData.get('email')
  const message = formData.get('message')

  try {
    if (name === undefined || email === undefined || message === undefined) {
      throw new Error('Missing required fields.')
    }
    if (!isValidEmail(email as string)) {
      throw new Error('Invalid email address.')
    }

    const timeSinceLastSubmission = rateLimit !== undefined
      ? Date.now() - Number(rateLimit)
      : undefined
    if (timeSinceLastSubmission !== undefined && timeSinceLastSubmission < RATE_LIMIT_WINDOW) {
      throw new Error(`Rate limit exceeded. Please try again ${formatTimeLeft(timeSinceLastSubmission)} seconds later.`)
    }

    if (process.env.SMTP_USER === undefined || process.env.SMTP_PASS === undefined) {
      console.error('SMTP credentials are not set in the environment variables.')
      throw new Error('Could not send message. Please try again later.')
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.RECEIPT_EMAIL,
      replyTo: email as string,
      subject: 'New Contact Form Submission at zla.app',
      text: `From: ${name as string} <${email as string}>\n\n${message as string}`,
    }

    await transporter.sendMail(mailOptions)
    return { success: true }
  }
  catch (err) {
    console.error('Failed to send email:', err)
    return { success: false, error: err instanceof Error ? err.message : 'Failed to send message' }
  }
}
