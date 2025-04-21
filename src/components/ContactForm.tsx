'use client'

import { handleSubmit } from '@/utils'
import { Turnstile } from '@marsidev/react-turnstile'
import Form from 'next/form'
import { useActionState, useEffect, useState } from 'react'
import { toast } from 'sonner'

const ContactForm = () => {
  const [rateLimit, setRateLimit] = useState<string>('0')
  const [state, formAction, pending] = useActionState(handleSubmit, undefined)
  const [validationPassed, setValidationPassed] = useState(false)

  useEffect(() => {
    if (globalThis !== undefined) {
      const rateLimit = localStorage.getItem('RATE_LIMIT_KEY')
      // eslint-disable-next-line react-hooks-extra/no-direct-set-state-in-use-effect
      setRateLimit(rateLimit ?? '0')
    }
  }, [])

  useEffect(() => {
    if (state === undefined) {
      return
    }

    if (state.success) {
      toast.success('Message sent successfully!')
      // eslint-disable-next-line react-hooks-extra/no-direct-set-state-in-use-effect
      setRateLimit(Date.now().toString())
      localStorage.setItem('RATE_LIMIT_KEY', rateLimit)
    }
    else if (!state.success) {
      toast.error(state.error)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  return (
    <section aria-labelledby="contact-form">
      <h2 id="contact-form" className="text-2xl font-semibold text-primary-400 dark:text-primary-300 mb-4">
        Send a Message
      </h2>
      <Form
        className="space-y-6"
        action={formAction}
      >
        <input
          id="rateLimit"
          type="hidden"
          name="rateLimit"
          value={Number.parseInt(rateLimit ?? '0', 10)}
        />
        <label htmlFor="name" className="block mb-1 font-medium">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          placeholder="Peter Anteater"
          className="w-full rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-2 text-body dark:text-body-dark focus:outline-none focus:ring-2 focus:ring-accent-300"
        />

        <label htmlFor="email" className="block mb-1 font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="example@mail.com"
          className="w-full rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-2 text-body dark:text-body-dark focus:outline-none focus:ring-2 focus:ring-accent-300"
        />

        <label htmlFor="message" className="block mb-1 font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Hello, I would like to..."
          className="w-full rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-2 text-body dark:text-body-dark focus:outline-none focus:ring-2 focus:ring-accent-300"
        />

        <Turnstile
          siteKey="0x4AAAAAAA1qSSBaaPR3VVpF"
          onError={() => setValidationPassed(false)}
          onExpire={() => setValidationPassed(false)}
          onSuccess={() => setValidationPassed(true)}
        />

        <button
          type="submit"
          disabled={!validationPassed || pending}
          className="inline-flex items-center px-6 py-2 bg-primary-300 rounded font-medium transition-all-300 cursor-pointer hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary text-background disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500 dark:bg-primary-200 dark:text-background dark:disabled:bg-gray-700 dark:disabled:text-gray-500"
        >
          {pending
            ? (
                <>
                  Sending...
                  <svg
                    className="animate-spin ml-2 h-4 w-4 text-background"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                </>
              )
            : (
                'Send Message'
              )}
        </button>
      </Form>
    </section>
  )
}

export default ContactForm
