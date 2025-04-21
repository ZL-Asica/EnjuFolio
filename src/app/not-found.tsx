'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

function Custom404() {
  const [countdown, setCountdown] = useState(10)

  useEffect(() => {
    // Set up a countdown timer
    const timer = setInterval(() => {
      setCountdown(previous => previous - 1)
    }, 1000)

    // Redirect after 10 seconds
    const redirectTimer = setTimeout(() => {
      globalThis.location.href = '/'
    }, 10_000)

    // Clean up both timers on component unmount
    return () => {
      clearTimeout(redirectTimer)
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="mx-8 mt-[30vh] flex flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-3xl font-bold text-primary-300 font-mono">
        404 - Not Found (；′⌒`)
      </h1>
      <p className="mb-6 text-base leading-7">
        Sorry, the page you are looking for does not exist or has been removed  🔍
        <br />
        Will be redirected to the homepage in
        {' '}
        <span className="text-secondary-500">{countdown}</span>
        {' '}
        seconds...
      </p>
      <Link
        href="/"
        className="rounded-sm bg-secondary-300 px-4 py-2 text-white no-underline transition-all-500 hover:scale-110 bg-hover-secondary hover:text-black"
      >
        Back to Home
      </Link>
    </div>
  )
}

export default Custom404
