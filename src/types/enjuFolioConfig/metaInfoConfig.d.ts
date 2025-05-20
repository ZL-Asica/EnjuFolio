interface EnjuFolioMetaInfoConfig {
  /**
   * The affiliation that you are currently working at.
   *
   * - Leave this blank if you don't want to put this information in the meta (JSON-LD) info.
   * - You can set **one** or **multiple** affiliations if you have.
   * @example
   * ```ts
   * Northwestern University
   * ```
   * @example
   * ```ts
   * ['Northwestern University', 'University of California, Irvine']
   * ```
   */
  affiliation?: string | string[]

  /**
   * The university that you have graduated from.
   *
   * - Leave this blank if you don't want to put this information in the meta (JSON-LD) info.
   * - You can set **one** or **multiple** universities if you have.
   * @example
   * ```ts
   * University of California, Irvine
   * ```
   * @example
   * ```ts
   * ['Northwestern University', 'University of California, Irvine']
   * ```
   */
  alumniOf?: string | string[]

  /**
   * The name of the person you want to display in the meta (JSON-LD) info and any other meta info sections.
   *
   * Leave this blank will use the one you set `author` field.
   */
  name?: string

  /**
   * Your family name.
   *
   * - Leave this blank will end up in the following options:
   *   - The last part of the `name` field you set in the `homePage` field will be used.
   *   - Or the last part you set in the `author` field will be used if it more than 2 parts.
   *
   * @example
   * ```ts
   * ZL
   * ```
   */
  familyName?: string

  /**
   * Your given name.
   *
   * - Leave this blank will end up in the following options:
   *   - The first part of the `name` field you set in the `homePage` field will be used.
   *   - Or the first part you set in the `author` field will be used if it more than 2 parts.
   *
   * @example
   * ```ts
   * Asica
   * ```
   */
  givenName?: string

  /**
   * The name you want to be tracked as a same person (sameAs field in JSON-LD).
   *
   * - You can leave this blank if you don't want to put this information in the meta (JSON-LD) info.
   * - You can set **one** or **multiple** accounts if you have.
   * @example
   * ```ts
   * ['ZL Asica', 'Asica']
   * ```
   */
  alsoKnownAs?: string | string[]

  /**
   * Any other portofolio or social media accounts you want to be tracked as a same person (sameAs field in JSON-LD).
   *
   * - You can leave this blank if you don't want to put this information in the meta (JSON-LD) info.
   * - You can set **one** or **multiple** accounts if you have.
   * @example
   * ```ts
   * ['https://github.com/ZL-Asica/', 'https://zla.pub/']
   * ```
   */
  sameAs?: string | string[]
}
