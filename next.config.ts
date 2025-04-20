import type { NextConfig } from 'next'
import createMDX from '@next/mdx'
import rehypeKatex from 'rehype-katex'
import remarkGemoji from 'remark-gemoji'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'

const nextConfig: NextConfig = {
  pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
  images: {
    formats: ['image/avif', 'image/webp'],
    localPatterns: [
      {
        pathname: '/images/**',
        search: '',
      },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, remarkGemoji, remarkMath],
    rehypePlugins: [rehypeKatex],
  },
})

export default withMDX(nextConfig)
