interface EnjuFolioConfig {
  /**
   * The home page title of your site or portfolio
   *
   * This will be the home page title.
   * @example
   * ```ts
   * Enju Folio | Academic Portfolio
   * ```
   */
  title: string

  /**
   * The sub title of your site or portfolio
   *
   * This will be the title after **`|`** in every subpage.
   *
   * Such as **`Projects | Enju Folio`** if you set this value to **`Enju Folio`**.
   * @example
   * ```ts
   * Enju Folio
   * ```
   */
  subTitle: string

  /**
   * The short name on the top left corner of the page
   *
   * This will be the title on the top left corner of the page.
   * @example
   * ```ts
   * Enju
   * ```
   */
  siteShortName: string

  /**
   * The description of your site or portfolio
   * @example
   * ```ts
   * A portfolio for my academic work
   * ```
   */
  description: string

  /**
   * The URL of your site or portfolio.
   * **_Do not_** include a trailing slash.
   * @example
   * ```ts
   * https://enju.zla.app
   * ```
   */
  url: string

  /**
   * The author of your site or portfolio.
   *
   * This will be the one showing in footer copyright area and meta.
   * @example
   * ```ts
   * Elara Liu
   * ```
   */
  author: string

  /**
   * Any other name you have that will be used to identify you in every research and project page. Any of your name will be underlined if you set this value.
   *
   * - The previous **`author`** will also be used as the default value.
   * - You can leave this blank if you don't have any other name.
   * - You can set **one** or **multiple** names if you have.
   * @example
   * ```ts
   * ['Elara Liu', 'Elara', 'ZL Asica']
   * ```
   */
  otherNames?: string | string[]

  /**
   * The config of your home page.
   *
   * This will be the config of your home page.
   */
  homePage: EnjuFolioHomePageConfig

  /**
   * The meta information of your site or portfolio.
   *
   * This will be the meta information of your site or portfolio.
   */
  metaInfo: EnjuFolioMetaInfoConfig

  /**
   * The social links of your site or portfolio.
   *
   * This will be the social links of your site or portfolio.
   */
  socialLinks: EnjuFolioSocialLinksConfig
}
