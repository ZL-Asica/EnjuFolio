interface RSSConfig {
  /**
   * Whether to generate the RSS feed for the news section.
   * @default false
   */
  news?: boolean

  /**
   * Whether to generate the RSS feed for the research section.
   * @default false
   */
  research?: boolean

  /**
   * Whether to generate the RSS feed for the projects section.
   * @default false
   */
  projects?: boolean
}

interface EnjuFolioSocialLinksConfig {
  /**
   * The GitHub account you want to link to that will be shown in the footer.
   * @example
   * ```ts
   * https://github.com/ZL-Asica/
   * ```
   */
  github?: string

  /**
   * The LinkedIn account you want to link to that will be shown in the footer.
   * @example
   * ```ts
   * https://www.linkedin.com/in/some-one/
   * ```
   */
  linkedin?: string

  /**
   * The Instagram account you want to link to that will be shown in the footer.
   * @example
   * ```ts
   * https://www.instagram.com/some-one/
   * ```
   */
  instagram?: string

  /**
   * The ORCID account you want to link to that will be shown in the footer.
   * @example
   * ```ts
   * https://orcid.org/0000-0000-0000-0000
   * ```
   */
  orcid?: string

  /**
   * The Telegram account you want to link to that will be shown in the footer.
   * @example
   * ```ts
   * https://t.me/some-one
   * ```
   */
  telegram?: string

  /**
   * The Bluesky account you want to link to that will be shown in the footer.
   * @example
   * ```ts
   * https://bsky.app/profile/someone.bsky.social
   * ```
   */
  bluesky?: string

  /**
   * The email you want to link to that will be shown in the footer.
   * @example
   * ```ts
   * example@email.com
   * ```
   */
  email?: string

  /**
   * The sections you want to generate inside the RSS feed. You can set one or multiple sections.
   *
   * Leave this blank will disable the RSS feed at all.
   * @example
   * ```ts
   * true
   * ```
   * @example
   * ```ts
   * { news: true, research: true, projects: true }
   * ```
   */
  rss?: boolean | RSSConfig
}
