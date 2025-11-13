interface RSSConfig {
  /**
   * Whether to generate an RSS feed for the news section.
   *
   * Turn this on if you want people (or yourself!) to subscribe to updates
   * from your news items using an RSS reader.
   *
   * @default false
   */
  news?: boolean

  /**
   * Whether to generate an RSS feed for the research section.
   *
   * This can be helpful if you regularly add new papers or preprints and
   * want collaborators or followers to subscribe.
   *
   * @default false
   */
  research?: boolean

  /**
   * Whether to generate an RSS feed for the projects section.
   *
   * Enable this if your projects change often (new tools, releases, etc.)
   * and you’d like people to keep track via RSS.
   *
   * @default false
   */
  projects?: boolean
}

interface EnjuFolioSocialLinksConfig {
  /**
   * Your GitHub profile URL, shown in the footer as an icon/link.
   *
   * Use the full URL (starting with `https://`). If you don’t want to
   * surface GitHub, you can leave this empty.
   *
   * @example
   * ```ts
   * "https://github.com/ZL-Asica/"
   * ```
   */
  github?: string

  /**
   * Your LinkedIn profile URL, shown in the footer as an icon/link.
   *
   * Again, use the full URL. This is often the main professional link
   * people are looking for on an academic/portfolio site.
   *
   * @example
   * ```ts
   * "https://www.linkedin.com/in/some-one/"
   * ```
   */
  linkedin?: string

  /**
   * Your Instagram account URL, if you want to share it.
   *
   * This can be personal or photography/art focused — it’s entirely up
   * to you whether to include it.
   *
   * @example
   * ```ts
   * "https://www.instagram.com/some-one/"
   * ```
   */
  instagram?: string

  /**
   * Your ORCID profile ID (without the full URL).
   *
   * This is especially useful for researchers, since many tools recognize
   * ORCID IDs and link publications to your profile.
   *
   * @example
   * ```ts
   * "0000-0000-0000-0000"
   * ```
   */
  orcid?: string

  /**
   * Your Telegram profile or channel URL.
   *
   * Only include this if you’re comfortable having visitors reach you there.
   *
   * @example
   * ```ts
   * "https://t.me/some-one"
   * ```
   */
  telegram?: string

  /**
   * Your Bluesky profile URL.
   *
   * If you’re active on Bluesky and want it discoverable from your site,
   * you can put your profile link here.
   *
   * @example
   * ```ts
   * "https://bsky.app/profile/someone.bsky.social"
   * ```
   */
  bluesky?: string

  /**
   * The email address shown in the footer.
   *
   * Provide just the email; the theme will turn it into a clickable link
   * with obfuscated text to help protect against spam.
   *
   * @example
   * ```ts
   * "example@email.com"
   * ```
   */
  email?: string

  /**
   * RSS feed configuration for your site.
   *
   * You can either:
   * - Set this to `true` to enable RSS for all supported sections, or
   * - Provide a fine-grained `RSSConfig` object to choose exactly which
   *   sections (news, research, projects) get a feed.
   *
   * If you leave this undefined, RSS is disabled.
   *
   * @example
   * ```ts
   * true
   * ```
   *
   * @example
   * ```ts
   * { news: true, research: true, projects: true }
   * ```
   */
  rss?: boolean | RSSConfig
}
