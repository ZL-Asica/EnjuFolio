interface Hobby {
  /**
   * A small emoji to represent this hobby or interest.
   *
   * This is purely for fun and warmth: a tiny visual hint next to each hobby
   * on your home page. You can pick anything that feels right:
   * - A literal symbol (🏞️ for hiking, 🎹 for music)
   * - Something metaphorical (🌱 for “slow growth”)
   *
   * If you don’t want emojis at all, just leave this empty.
   *
   * @example
   * ```ts
   * "🏞️"
   * ```
   */
  emoji?: string

  /**
   * The name of your hobby or interest.
   *
   * Keep it short and friendly — imagine how you’d mention it in a casual
   * introduction (“I love hiking and cooking”).
   *
   * @example
   * ```ts
   * "Hiking"
   * ```
   */
  name: string
}

interface EnjuFolioHomePageConfig {
  /**
   * The name you want to display on your home page.
   *
   * This is usually:
   * - Your full name (e.g., for academic / professional use), or
   * - A combination of your legal name and the name you go by.
   *
   * It appears prominently at the top, so choose the version you’re most
   * comfortable seeing and sharing.
   *
   * @example
   * ```ts
   * "Elara Liu"
   * ```
   */
  name: string

  /**
   * The avatar or profile picture shown on your home page.
   *
   * You have two options:
   * 1. A local image in your Next.js `public/images/` folder:
   *    - Set a path that starts with `/images/`
   *    - e.g., `/images/profile.webp` → `public/images/profile.webp`
   *
   * 2. A full URL to a remote image (CDN, static host, etc.):
   *    - e.g., `https://example.com/images/profile.webp`
   *
   * If you’re just getting started, you can keep the default and replace
   * the file later. A square or slightly-portrait image usually works best.
   *
   * @default /images/profile.webp
   * @example
   * ```ts
   * "/images/profile.webp"
   * ```
   * @example
   * ```ts
   * "https://enju.zla.app/images/profile.webp"
   * ```
   */
  picture?: string

  /**
   * Extra lines of information under your name.
   *
   * This is a cozy place for:
   * - Your name in another writing system
   * - A phonetic hint (how to pronounce your name)
   * - A short tagline or a tiny note about yourself
   *
   * If you have multiple lines, separate them with `\n`:
   * they’ll be rendered as line breaks on the page.
   *
   * @example
   * ```ts
   * "槐"
   * ```
   *
   * @example
   * ```ts
   * "槐\n(Pronounced like “why”)"
   * ```
   */
  otherInfo?: string

  /**
   * Your pronouns, if you’d like to show them on the home page.
   *
   * Note: the field name is `pronounce` for historical reasons, but this
   * is really for pronouns like “she/her”, “he/him”, “they/them”, etc.
   *
   * This will appear next to or under your name as a gentle cue to visitors.
   * If you’d rather not display pronouns, you can leave this empty.
   *
   * @example
   * ```ts
   * "(she / her)"
   * ```
   */
  pronouns?: string

  /**
   * Your current role or position, if you’d like to display it.
   *
   * This often takes the form:
   * - `MSCS Student @ Northwestern University`
   * - `Research Engineer @ Example Lab`
   * - `Designer & Developer, Freelance`
   *
   * Pick something that feels true to where you are right now. You can
   * also leave this blank if you’d rather let your projects speak for you.
   *
   * @example
   * ```ts
   * "Executive Director @ Best Company in the World"
   * ```
   */
  position?: string

  /**
   * Hobbies or interests you’d like to share on your home page.
   *
   * These appear as a small list (often with emojis) that make your
   * portfolio feel more like a person’s space, not just a CV.
   *
   * You can include:
   * - A few “headline” hobbies you’re happy to talk about
   * - Or leave it empty if you prefer a more minimal front page
   *
   * @example
   * ```ts
   * [
   *   { emoji: "🏞️", name: "Hiking" },
   *   { emoji: "📸", name: "Photography" },
   * ]
   * ```
   */
  hobbies?: Hobby[]

  /**
   * The date format used in the home page news section.
   *
   * This controls how dates appear next to your news items. You can choose
   * between styles like:
   * - `"YYYY-MM-DD"` → `2025-11-13`
   * - `"YYYY/MM/DD"` → `2025/11/13`
   * - `"MMM, YYYY"`  → `Nov, 2025`
   *
   * `MMM` uses the localized month name for a more human-readable style.
   * If you’re not sure, the default `"MMM, YYYY"` is a good, gentle choice.
   *
   * @default
   * ```ts
   * "MMM, YYYY"
   * ```
   */
  newsDateFormat?: string
}
