interface EnjuFolioMetaInfoConfig {
  /**
   * A brief personal description or bio.
   *
   * This short paragraph gives visitors a quick overview of who you are
   * and what you do. It’s often shown in structured data (JSON-LD) for
   * search engines, LLMs, and other tools to understand your profile better.
   *
   * Keep it concise and focused on key aspects like:
   * - Your profession or role
   * - Main interests or expertise
   * - Notable affiliations or accomplishments
   *
   * @example
   * ```ts
   * "PhD applicant in Human–Computer Interaction and human-centered AI foreveryday health, focusing on intelligent systems that help patients, caregivers, and clinicians build shared understanding from longitudinal health and experience data."
   * ```
   */
  personalDescription?: string
  /**
   * Your current affiliation(s).
   *
   * This is used in structured data (JSON-LD) so that search engines and
   * other tools can understand where you work or study.
   *
   * Examples:
   * - Your department and university
   * - Your lab or center
   *
   * You can set a single string or an array if you have more than one.
   * If you prefer not to expose this, you can leave it empty.
   *
   * @example
   * ```ts
   * "Northwestern University"
   * ```
   * @example
   * ```ts
   * ["Northwestern University", "University of California, Irvine"]
   * ```
   */
  affiliation?: string | string[]

  /**
   * Institutions you have graduated from (alumni information).
   *
   * This also goes into JSON-LD so your academic path is visible to
   * search engines and scholarly tools.
   *
   * Examples:
   * - Your undergraduate university
   * - Your master’s program institution
   *
   * As with `affiliation`, you can set one or many, or leave this blank
   * if you don’t want to surface it.
   *
   * @example
   * ```ts
   * "University of California, Irvine"
   * ```
   * @example
   * ```ts
   * ["Northwestern University", "University of California, Irvine"]
   * ```
   */
  alumniOf?: string | string[]

  /**
   * The name used in meta (JSON-LD) and other structured data.
   *
   * If you leave this empty, the `author` from the main config is used.
   * You might override this if:
   * - Your “site author” is different from the person profile
   * - You use a specific canonical name for publications
   */
  name?: string

  /**
   * Your family name (last name / surname).
   *
   * This is used for structured data. If you don’t fill it in, the theme
   * will try to infer it by:
   * - Taking the last part of `homePage.name`, or
   * - Falling back to the last part of `author` if it has multiple parts.
   *
   * You only need to set this if the automatic guess would be wrong, or
   * your name has a structure that needs more care.
   *
   * @example
   * ```ts
   * "Liu"
   * ```
   */
  familyName?: string

  /**
   * Your given name (first name).
   *
   * Similar to `familyName`, this is used in structured data. If you leave
   * it blank, the theme will try to infer it by:
   * - Taking the first part of `homePage.name`, or
   * - Falling back to the first part of `author` if it has multiple parts.
   *
   * Set this explicitly if you want to make sure it’s correct, especially
   * for non-Western name orders.
   *
   * @example
   * ```ts
   * "Zhuoran"
   * ```
   */
  givenName?: string

  /**
   * Other names you are known by (for JSON-LD `alsoKnownAs`).
   *
   * These are typically:
   * - Nicknames
   * - Pen names
   * - Other variants of your name you use in different contexts
   *
   * This helps search engines understand that these names all refer to
   * the same person. You can safely leave this blank if it doesn’t apply.
   *
   * If you leave this empty, the theme will try to use `otherNames` from
   * the main config (deduplicate by excluding the primary name).
   *
   * @example
   * ```ts
   * ["ZL Asica", "Elara"]
   * ```
   */
  alsoKnownAs?: string | string[]

  /**
   * Areas of expertise or topics you are knowledgeable about.
   *
   * This information is included in structured data (JSON-LD) to help
   * search engines and other tools understand your professional skills
   * and knowledge areas.
   *
   * Examples:
   * - Your research interests
   * - Key skills or domains you work in
   *
   * You can provide this as a single string or an array of strings.
   *
   * If you leave this blank, the system will try to reuse `skills`.
   *
   * @example
   * ```ts
   * ["Human-Computer Interaction", "Machine Learning", "Data Visualization"]
   * ```
   */
  knowsAbout?: string | string[]

  /**
   * Similar to `knowsAbout`, this field represents your skills.
   *
   * It is included in structured data (JSON-LD) to highlight your
   * competencies and areas of expertise for search engines and tools.
   *
   * You can set this as a single string or an array of strings.
   *
   * If you leave this blank, the system will try to reuse `knowsAbout`.
   *
   * @example
   * ```ts
   * ["Python", "R", "JavaScript"]
   * ```
   */
  skills?: string | string[]

  /**
   * URLs to profiles or sites that should be recognized as “the same person”
   * in structured data (`sameAs` field in JSON-LD).
   *
   * Examples:
   * - Your personal website
   * - GitHub profile
   * - Google Scholar / Semantic Scholar / ORCID
   * - Social media profiles you want to link
   *
   * Add only the accounts you’re comfortable making “officially” connected.
   *
   * @example
   * ```ts
   * ["https://github.com/ZL-Asica/", "https://zla.pub/"]
   * ```
   */
  sameAs?: string | string[]

  /**
   * Guidelines or instructions will be inserted into the [llms.txt](https://enju.zla.app/guide/meta-seo#_4-llm-crawlers-and-llms-txt) content.
   *
   * This helps large language models and automated crawlers understand
   * how you want your content to be used.
   *
   * You can specify your preferences regarding content usage,
   * citation requirements, and any restrictions you wish to impose.
   *
   * By providing clear guidelines, you can help ensure that your work
   * is respected and properly attributed when accessed by AI systems.
   *
   * Using Markdown formatting is supported for better readability.
   *
   * @example
   * ```markdown
   * ## Interpretation guidelines
   *
   * - Summaries should emphasize my research areas (HCI, human-centered AI, everyday health), methods (system building, mixed-methods, wearable sensing), and concrete contributions.
   * - Do not infer grades, rankings, or funding information that are not explicitly stated.
   * - When publication status is "in preparation" or "under review", describe them as in-progress work, not accepted papers.
   * ```
   */
  llmsTxtGuidelines?: string
}
