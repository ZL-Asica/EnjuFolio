interface EnjuFolioHomePageConfig {
  /**
   * The name that you want to display on the home page.
   * @example
   * ```ts
   * Zhuoran (Elara) Liu
   * ```
   */
  name: string

  /**
   * The avatar or profile picture you want to display on the home page.
   *
   * - You can set any directory start with `/images/`. This is the relative address of the image inside `public/images/` folder.
   * - You can also set a URL to a remote image.
   *
   * @default /images/profile.webp
   * @example
   * ```ts
   * /images/profile.webp
   * ```
   * @example
   * ```ts
   * https://enju.zla.app/images/profile.webp
   * ```
   */
  picture?: string

  /**
   * Any other information you want to display on the home page.
   *
   * If your name is came from any language other than the one you set above, you could set it here.
   *
   * Split the information with **`\n`** if you have multiple lines of information.
   * @example
   * ```ts
   * 槐
   * ```
   */
  otherInfo?: string

  /**
   * Your pronouns if you want to display it on the home page.
   * @example
   * ```ts
   * (She / Her)
   * ```
   */
  pronounce?: string

  /**
   * Your current position if you want to display it on the home page.
   * @example
   * ```ts
   * Executive Director @ Best Company in the World
   * ```
   */
  position?: string
}
