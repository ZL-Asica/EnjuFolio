interface EnjuFolioMetaInfoConfig {
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
   * @example
   * ```ts
   * ["ZL Asica", "Elara"]
   * ```
   */
  alsoKnownAs?: string | string[]

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
}
