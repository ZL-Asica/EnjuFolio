interface Hobby {
  /**
   * An optional emoji representing your hobby or interest.
   * You can use any emoji character.
   *
   * If you don't want to use an emoji, you can leave this blank.
   *
   * @example
   * ```ts
   * 🏞️
   * ```
   */
  emoji?: string

  /**
   * The name of your hobby or interest.
   *
   * @example
   * ```ts
   * Hiking
   * ```
   */
  name: string
}

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

  /**
   * Your hobbies or interests.
   *
   * Will be displayed as a list of items with emojis on the home page.
   *
   * @example
   * ```ts
   * { emoji: '🏞️', name: 'Hiking' },
   * { emoji: '📸', name: 'Photography' },
   * ```
   */
  hobbies?: Hobby[]

  /**
   * The format of the date you want to display on the news section.
   *
   * Support `YYYY-MM-DD`, `YYYY/MM/DD`, `MMM, YYYY` kinds of formats.
   * `MMM` is using local month for a more human-readable format.
   *
   * @default
   * ```ts
   * MMM, YYYY
   * ```
   */
  newsDateFormat?: string
}
