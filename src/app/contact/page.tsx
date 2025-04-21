import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact | Elara\'s Portfolio',
  description: 'Get in touch with Zhuoran (Elara) Liu.',
  // ! This page should be removed
  robots: { index: false, follow: false },
}

export default function ContactPage() {
  return (
    <div className="max-w-lg mx-auto py-12 px-4 motion-safe:animate-mask-reveal">
      <section className="text-center mb-8">
        <h1 className="text-3xl font-serif font-bold">
          Contact Me
        </h1>
        <p className="mt-2 text-secondary-400 dark:text-secondary-300">
          I’d love to hear from you! Whether it’s a research collaboration, teaching opportunity, or general inquiry,
          feel free to reach out.
        </p>
      </section>

      {/* Contact Links */}
      <section aria-labelledby="contact-links" className="mb-12">
        <h2 id="contact-links" className="text-2xl font-semibold text-primary-400 dark:text-primary-300 mb-4">
          Connect With Me
        </h2>
        <ul className="space-y-4">
          <li className="flex items-center">
            <Mail className="w-6 h-6 text-secondary-400 dark:text-secondary-300 mr-3" />
            <Link href="mailto:elara.liu@u.northwestern.edu" className="underline-interactive">
              elara.liu@u.northwestern.edu
            </Link>
          </li>
          <li className="flex items-center">
            <Linkedin className="w-6 h-6 text-secondary-400 dark:text-secondary-300 mr-3" />
            <Link
              href="https://linkedin.com/in/elara-liu"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-interactive"
            >
              linkedin.com/in/elara-liu
            </Link>
          </li>
          <li className="flex items-center">
            <Github className="w-6 h-6 text-secondary-400 dark:text-secondary-300 mr-3" />
            <Link
              href="https://github.com/ZL-Asica/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-interactive"
            >
              github.com/ZL-Asica
            </Link>
          </li>
        </ul>
      </section>
      <ContactForm />
    </div>
  )
}
