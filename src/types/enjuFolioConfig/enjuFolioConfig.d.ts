/**
 * Global configuration for your Enju Folio site.
 *
 * Think of this as the “personality” and basic identity of your portfolio:
 * your name, how the browser tab looks, where your CV lives, and how the
 * homepage should introduce you.
 */
interface EnjuFolioConfig {
  /**
   * The home page title of your site or portfolio.
   *
   * This is the main title shown on:
   * - The browser tab when someone visits your site
   * - Search engines and link previews (together with `description`)
   *
   * A good pattern is: `<Your Name> | <What this site is>`.
   * Keep it short, clear, and something you’re happy to see every day.
   *
   * @example
   * ```ts
   * "Enju Folio | Academic Portfolio"
   * ```
   */
  title: string

  /**
   * The “site name” that appears after the `|` in subpage titles.
   *
   * For any page that is not the homepage, the title will typically look like:
   *
   * - `Projects | Enju's Folio`
   * - `Research | Enju's Folio`
   *
   * Here, `Enju's Folio` is the `subTitle`. In most cases, this can just be:
   * - Your name (e.g., `"Elara Liu"`) or
   * - Your site’s short name (e.g., `"Enju's Folio"`).
   *
   * @example
   * ```ts
   * "Enju Folio"
   * ```
   */
  subTitle: string

  /**
   * The short label in the top-left corner of the site.
   *
   * This is the compact “brand” of your site that appears in the header.
   * It should be:
   * - Very short (1–2 words)
   * - Instantly recognizable as “you”
   *
   * Many people simply use their first name, nickname, or initials.
   *
   * @example
   * ```ts
   * "Enju"
   * ```
   */
  siteShortName: string

  /**
   * A one–two sentence description of your site or portfolio.
   *
   * This is used in:
   * - Meta tags for search engines (SEO)
   * - Social media link previews
   *
   * Write this as if you’re introducing your work to a kind, curious stranger.
   * What should they know at a glance about you and this website?
   *
   * Leave it blank to use the default general description which will also working
   * pretty well for most research portfolios.
   *
   * @example
   * ```ts
   * "A portfolio for my academic work at the intersection of HCI, systems, and health."
   * ```
   */
  description?: string

  /**
   * The full public URL of your site or portfolio.
   *
   * This is used to build canonical links, Open Graph meta tags, and
   * other absolute URLs. It should point to the **deployed** site, and
   * must:
   * - Start with `https://`
   * - **Not** include a trailing slash
   *
   * @example
   * ```ts
   * "https://enju.zla.app"
   * ```
   */
  siteUrl: string

  /**
   * Public URL to your CV document (Google Drive is recommended).
   *
   * This value is used on the `/cv` page for:
   * - The embedded preview iframe
   * - The “Open PDF” / “View full CV” button
   *
   * Supported formats:
   * - A public Google Drive file link:
   *   - `https://drive.google.com/file/d/<FILE_ID>/view`
   *   - `https://drive.google.com/file/d/<FILE_ID>/preview`
   *   - `https://drive.google.com/open?id=<FILE_ID>`
   *   - `https://drive.google.com/uc?id=<FILE_ID>&export=download`
   *
   *   The theme will normalize these so that:
   *   - The iframe uses a `/preview` URL
   *   - The external link uses a `/view` URL
   *
   * - A direct HTTPS link to a PDF:
   *   - e.g. `https://example.com/path/to/cv.pdf`
   *
   * - A relative path to a file in your Next.js `public/` directory:
   *   - e.g. `/cv/elara-liu-cv.pdf`
   *
   * Choose whichever option fits your workflow best. If you regularly
   * update your CV, a Google Drive “file” URL is often the easiest.
   *
   * @example
   * // Recommended: Google Drive “file” URL (view or preview)
   * "https://drive.google.com/file/d/your_cv_file_id/view?usp=sharing"
   *
   * @example
   * // Local file in the Next.js `public/` directory
   * "/cv/elara-liu-cv.pdf"
   */
  cvFileLink: string

  /**
   * The primary author name for your site or portfolio.
   *
   * This is the name that appears:
   * - In the footer copyright area
   * - In meta tags and some structured data
   *
   * Use the name you are most comfortable with for professional contexts
   * (e.g., how you appear on publications or your CV).
   *
   * @example
   * ```ts
   * "Elara Liu"
   * ```
   */
  author: string

  /**
   * Any other names you use that should be recognized as “you”
   * across research and project pages.
   *
   * When set, any occurrence of these names in content can be underlined
   * or highlighted to gently signal “this is you” to visitors.
   *
   * Notes:
   * - The `author` value is automatically included as a default.
   * - You can leave this unset if you only go by a single name.
   * - You can set **one** or **multiple** names if you use:
   *   - Different name forms in different places (e.g., full name vs. nickname)
   *   - Different writing names or handles
   *
   * @example
   * ```ts
   * ["Zhuoran Liu", "Elara Liu", "Elara", "ZL Asica"]
   * ```
   */
  otherNames?: string | string[]

  /**
   * Configuration for your home page.
   *
   * This controls how the very first page a visitor sees is structured:
   * what sections appear, in what order, and how they introduce you.
   *
   * Use this to decide what “welcome experience” you want:
   * a quick overview, a story, featured projects, or something else.
   */
  homePage: EnjuFolioHomePageConfig

  /**
   * Meta information for your site or portfolio.
   *
   * This includes details like:
   * - Default Open Graph / social preview settings
   * - Favicon and icon behavior
   * - SEO-related settings beyond the basic `title` and `description`
   *
   * If the homepage is your “front door”, `metaInfo` is how your site
   * introduces itself to the wider web.
   *
   * These information is extremely important for search engines, LLMs,
   * and other external services to correctly identify and represent you.
   *
   * If any companies, institutions, or people intersects your work and
   * search you through search engines or AI tools, this is how you can
   * optimize the results as you expect.
   */
  metaInfo: EnjuFolioMetaInfoConfig

  /**
   * Social links for your site or portfolio.
   *
   * These are the places where visitors can find and follow you:
   * GitHub, LinkedIn, Google Scholar, Twitter/X, personal blog, etc.
   *
   * Fill this out with the accounts you’re comfortable sharing.
   * It’s perfectly okay to leave some platforms empty.
   */
  socialLinks: EnjuFolioSocialLinksConfig

  /**
   * Whether to disable `llms.txt` generation for research/projects.
   *
   * `llms.txt` is a community convention for telling large language
   * models and automated crawlers how you’d like your content to be used.
   *
   * - `true`  → Do **not** generate llms.txt; you are opting **out** of
   *             this protection for now.
   * - `false` → Generate llms.txt to help express your preferences.
   *
   * If you care a lot about how AI systems may reuse your work and
   * want an extra layer of signaling, consider keeping this enabled.
   *
   * @link https://llmstxt.org/
   * @default true
   */
  disableLlmstxt?: boolean
}
