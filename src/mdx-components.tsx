import type { MDXComponents } from 'mdx/types'
import type { ImageProps } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'
import { isValidElement } from 'react'
import { CodeBlock, KEY_ICONS } from './components/parser'
import DividerLine from './components/parser/DividerLine'
import { generateHierarchicalSlug, slugPrefix } from './utils'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  const headingLevels = {
    h2: 0,
    h3: 0,
    h4: 0,
    h5: 0,
    h6: 0,
  }

  const titleSlug = (slug: string, level: number) => slugPrefix(slug, level)

  return {
    // Heading related
    h2: ({ children }) => {
      const slug = generateHierarchicalSlug('h2', headingLevels)
      return (
        <h2
          className="group text-hover-primary transition-colors-300 relative mb-6 mt-6 border-b-2 pb-1 text-3xl font-extrabold leading-loose"
          id={slug}
        >
          {titleSlug(slug, 2)}
          {children}
          <span className="transition-all-300 absolute bottom-[-0.1em] left-0 w-[20%] rounded-md border-b-4 border-primary-300 dark:border-primary-200 group-hover:w-[35%]" aria-hidden="true" />
        </h2>
      )
    },

    h3: ({ children }) => {
      const slug = generateHierarchicalSlug('h3', headingLevels)
      return (
        <h3
          className="group relative flex items-center my-5 pl-3 text-2xl font-bold leading-normal text-hover-primary transition-colors-300"
          id={slug}
        >
          <span className="absolute left-0 h-full w-1 bg-primary rounded-full transition-all-300 group-hover:w-1.5" aria-hidden="true" />
          {titleSlug(slug, 3)}
          {children}
        </h3>
      )
    },

    h4: ({ children }) => {
      const slug = generateHierarchicalSlug('h4', headingLevels)
      return (
        <h4
          className="group relative flex items-center my-4 pl-3 text-xl font-semibold leading-normal text-hover-primary transition-colors-300"
          id={slug}
        >
          <span className="absolute left-0 h-full w-1 bg-secondary rounded-full transition-all-300 group-hover:w-1.5" aria-hidden="true" />
          {titleSlug(slug, 4)}
          {children}
        </h4>
      )
    },

    h5: ({ children }) => {
      const slug = generateHierarchicalSlug('h5', headingLevels)
      return (
        <h5
          className="group relative flex items-center my-3 pl-3 text-lg font-medium leading-normal text-hover-primary transition-colors-300"
        >
          <span className="absolute left-0 h-2/3 w-0.5 bg-gray-400 dark:bg-gray-500 rounded-full transition-all-300 group-hover:w-1" aria-hidden="true" />
          {titleSlug(slug, 5)}
          {children}
        </h5>
      )
    },

    h6: ({ children }) => {
      const slug = generateHierarchicalSlug('h6', headingLevels)
      return (
        <h6
          className="group relative my-2 text-base font-medium leading-normal text-hover-primary transition-colors-300"
          id={slug}
        >
          {titleSlug(slug, 6)}
          {children}
          <span className="transition-all-300 absolute bottom-0 left-0 w-[10%] rounded-md border-b border-dashed border-gray-400 dark:border-gray-500 group-hover:w-[15%]" aria-hidden="true" />
        </h6>
      )
    },

    // Text related
    p: ({ children }) => (
      <p className="my-5 text-base leading-[1.9] tracking-normal text-foreground wrap-break-word">
        {children}
      </p>
    ),

    em: ({ children }) => (
      <em className="italic text-primary-600 dark:text-primary-400">
        {children}
      </em>
    ),

    u: ({ children }) => (
      <u className="underline underline-offset-[0.2em] decoration-dotted decoration-primary-400/80 dark:decoration-primary-300/80">
        {children}
      </u>
    ),

    strong: ({ children }) => (
      <strong className="font-semibold text-primary-500 dark:text-primary-300">
        {children}
      </strong>
    ),

    del: ({ children }) => (
      <del className="line-through text-slate-500 dark:text-slate-500/80">
        {children}
      </del>
    ),
    sup: ({ children }) => <sup className="text-xs align-super">{children}</sup>,
    sub: ({ children }) => <sub className="text-xs align-sub">{children}</sub>,
    blockquote: ({ children }) => (
      <div className="my-3 flex justify-center">
        <blockquote className="w-[95%] rounded-md border-l-4 border-primary-300 dark:border-primary-200 bg-gray-light bg-opacity-75 py-0.5 pl-3 pr-2 italic shadow-sm transition-shadow duration-300 hover:shadow-md">
          {children}
        </blockquote>
      </div>
    ),
    details: ({ children }) => (
      <details className="cursor-pointer rounded-lg border border-gray-300 bg-background p-3 open:bg-background">
        {children}
      </details>
    ),
    summary: ({ children }) => (
      <summary className="font-semibold text-primary cursor-pointer">
        {children}
      </summary>
    ),
    mark: ({ children }) => (
      <mark className="bg-yellow-200 px-1 py-0.5 rounded">
        {children}
      </mark>
    ),
    // Checkbox related [x] or [ ]
    input: ({ children, ...props }) => (
      <label className="relative inline-flex items-center text-center">
        <input
          type="checkbox"
          className="peer form-tick appearance-none h-4 w-4 border border-gray-300 rounded-md checked:bg-primary-400 checked:border-transparent dark:checked:bg-primary-300"
          {...props}
        />
        <span className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 peer-checked:opacity-100" aria-hidden="true">
          <svg
            className="h-4 w-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </span>
      </label>
    ),

    // List related
    ul: ({ children }) => (
      <div className="my-4 rounded-lg border-2 border-dashed border-primary-300 dark:border-primary-200 p-3">
        <ul className="ml-2 list-disc list-inside">
          {children}
        </ul>
      </div>
    ),
    ol: ({ children }) => (
      <div className="my-4 rounded-lg border-2 border-dashed border-secondary-400 dark:border-secondary-300 p-3">
        <ol className="ml-2 list-decimal list-inside">
          {children}
        </ol>
      </div>
    ),
    li: ({ children }) => (
      <li className="leading-relaxed marker:text-primary-400 dark:marker:text-primary-300 marker:font-medium list-outside pl-1 ml-2">
        {children}
      </li>
    ),

    // Link related
    a: ({ href = '#', children, ...props }: { href?: string, children?: React.ReactNode }) => {
      const isInternalLink = typeof href === 'string' && (href.startsWith('/') || href.startsWith('#'))
      return (
        <Link
          href={href}
          target={isInternalLink ? '_self' : '_blank'}
          rel="noopener noreferrer"
          aria-label={
            isInternalLink
              ? undefined
              : `Open ${children?.toString() ?? 'link'} in a new tab`
          }
          className="text-hover-primary underline-interactive mx-1 break-words font-semibold text-secondary decoration-[#5BCEFA] dark:decoration-[#81E6D9] hover:text-accent-700 dark:hover:text-accent-600"
          {...(props as Record<string, unknown>)}
        >
          {children}
        </Link>
      )
    },

    // Image related
    img: (props) => {
      const { alt, ...rest } = props as ImageProps

      return (
        <figure className="my-8">
          <Image
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            width={1000}
            height={1000}
            priority={false}
            alt={alt ?? ''}
            className="w-full h-auto max-h-[800px] md:max-h-[1000px] object-contain"
            {...(rest as Omit<ImageProps, 'alt'>)}
          />
          {alt && (
            <figcaption className="mt-2 text-base text-secondary-500 dark:text-secondary-400 text-center italic">
              {alt}
            </figcaption>
          )}
        </figure>
      )
    },

    video: (props: React.VideoHTMLAttributes<HTMLVideoElement> & { src: string }) => (
      <video
        className="rounded-lg shadow-md max-h-80"
        controls
        autoPlay
        loop
        muted
        {...props}
      >
        <source src={props.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ),

    // Code related
    code: ({ className, children, ...props }) => {
      const match = typeof className === 'string' ? /language-(\w+)/.exec(className) : null
      return match
        ? (
            <CodeBlock match={match}>
              {children}
            </CodeBlock>
          )
        : (
            <code
              className="inline-block rounded-lg bg-primary-300/20 mx-1 px-0.5 font-mono text-base font-semibold text-primary-400 dark:text-primary-200"
              {...(props as Record<string, unknown>)}
            >
              {children}
            </code>
          )
    },

    pre: ({ children }: { children?: React.ReactNode }) => {
      const language
        = isValidElement(children) && (children.props as { className?: string }).className != null && (children.props as { className?: string }).className !== ''
          ? ((children.props as { className?: string })?.className ?? '')
              .replace('language-', '')
              .toUpperCase()
          : 'CODE'

      return (
        <pre className="relative overflow-hidden rounded-lg bg-gray-700 pt-8 shadow-sm shadow-slate-950 transition-all-300 hover:shadow-md dark:shadow-slate-700">
          {/* MacOS window buttons */}
          <div className="absolute left-3 top-2 flex space-x-2" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-red-500 transition-all-300 hover:ring-1 hover:ring-white hover:scale-105" />
            <span className="h-3 w-3 rounded-full bg-yellow-400 transition-all-300 hover:ring-1 hover:ring-white hover:scale-105" />
            <span className="h-3 w-3 rounded-full bg-green-500 transition-all-300 hover:ring-1 hover:ring-white hover:scale-105" />
          </div>

          {/* Language display */}
          <div className="absolute left-1/2 top-2 -translate-x-1/2 transform text-sm font-semibold text-gray-300">
            {language}
          </div>

          {children}
        </pre>
      )
    },
    kbd: ({ children }) => {
      const key = typeof children === 'string'
        ? children.toLowerCase().replace(/\s+/g, '')
        : ''

      return (
        <kbd className="items-center justify-center gap-1 rounded-md border border-gray-500 bg-gray-800 px-2 py-1 text-sm font-mono text-white shadow-md">
          {KEY_ICONS[key] ?? children}
        </kbd>
      )
    },

    // Table related
    table: ({ children }) => (
      <div className="my-6 w-full rounded-lg border border-gray-300 shadow-md overflow-y-auto">
        <table className="w-full rounded-lg border text-left overflow-y-auto">
          {children}
        </table>
      </div>
    ),

    th: ({ children, className }) => (
      <th
        className={`border border-gray-400 bg-primary-300/90 px-4 py-3 font-semibold text-white ${className}`}
      >
        {children}
      </th>
    ),
    td: ({ children, className }) => (
      <td
        className={`border border-gray-300 bg-gray-light px-4 py-3 font-medium ${className}`}
      >
        {children}
      </td>
    ),

    tr: ({ children, className }) => (
      <tr className={`${className} odd:bg-background even:bg-gray-dark even:bg-opacity-75`}>
        {children}
      </tr>
    ),

    // Misc
    hr: () => <DividerLine />,
    br: () => (
      <br className="flex justify-center my-4" />
    ),
    ...components,
  }
}
