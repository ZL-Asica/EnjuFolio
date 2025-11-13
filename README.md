# Enju Folio

> **Enju (槐 🌳 in Japanese)** — a symbol of knowledge, longevity, and quiet elegance.
>
> Enju Folio is a minimalist, accessible, and carefully structured **academic portfolio** template built with **Next.js** and **Tailwind CSS**, designed to showcase your research, projects, and publications with clarity and warmth.

🚀 **[Live Demo](https://elaraliu.com/)** · 📚 **[Documentation](https://enju.zla.app/)**

If you enjoy using it, please consider giving it a star ⭐ — I hope Enju Folio can feel like a small home for your work, too.

[![GitHub License][license-badge]][license-link] [![Latest Release][release-badge]][release-link]

[![Node.js][node-badge]][node-link] [![pnpm Version][pnpm-badge]][pnpm-link] | [![Next.js][nextjs-badge]][nextjs-link] [![Tailwind CSS][tailwind-badge]][tailwind-link] | [![Vercel][vercel-badge]][vercel-link] [![Eslint][eslint-badge]][eslint-link] [![Prettier][prettier-badge]][prettier-link]

## 🚀 Get Started

Ready to launch your own Enju Folio? You have two options:

### 1. One-click deploy (recommended)

Deploy instantly to Vercel:

[![Deploy with Vercel][vercel-button]][vercel-deploy-link]

This will:

- Clone the repository to your GitHub account
- Create a Vercel project
- Set up build settings for you

After deployment, update `src/enju.config.ts` to make the site truly yours. And add your content in `src/contents`.

### 2. Run locally

**Prerequisites**

- [Node.js][node-link] `>= 20`
- [pnpm][pnpm-link] (Corepack or global install)

**Clone & start dev server**

```bash
git clone https://github.com/ZL-Asica/EnjuFolio.git
cd EnjuFolio

pnpm install
pnpm dev
```

Then open `http://localhost:3000` in your browser.

Next, edit:

- `src/enju.config.ts` — main site & portfolio configuration
- `src/contents` — MDX content for pages like research, projects, and news

For more details on configuration and structure, see the full docs:

📖 **[Enju Folio Documentation](https://enju.zla.app)**

## ✨ Features

- 🧑‍🎓 **Academic-first design**
  Built for researchers and students: sections for **research**, **projects**, **news**, and an embedded **CV**, with MDX-powered content.

- 🧩 **Config-driven, not CMS-heavy**
  Most customization lives in a single file: `src/enju.config.ts`.
  Set your name, affiliations, social links, metadata, and home layout without touching the internals.

- ♿ **Accessible by default**
  Semantic HTML, keyboard-friendly navigation, and thoughtful defaults for typography and contrast.

- 📄 **CV-friendly layout**
  Embed a local PDF or a public Google Drive link, with a dedicated `/cv` page and an “Open PDF” button.

- 🔍 **SEO & rich metadata**
  JSON-LD for **Person** / **Organization**, `sameAs` links, Open Graph tags, optional RSS feeds for news / research / projects.

- 🧠 **LLM-aware content**
  Optional `llms.txt` integration to express how you’d like language models to treat your research and portfolio content.

- 🎨 **Clean, responsive UI**
  Minimal Tailwind CSS styling, dark-mode friendly, and easy to extend with your own components.

- 🛠️ **TypeScript, linted & formatted**
  Ships with TypeScript, ESLint, and Prettier, so you get a consistent, production-ready base out of the box.

## 🏗️ Project Structure

```plaintext
.
├── public                    # Static assets
│   └── images                # Image resources (avatars, covers, etc.)
├── src                       # Application source code
│   ├── enju.config.ts        # Enju Folio main configuration
│   ├── app                   # Next.js App Router (routes, layouts, pages)
│   ├── components            # Reusable UI components
│   │   ├── common            # Shared/common components
│   │   │   └── layout        # Layout-related components
│   │   └── ...               # Section-specific components
│   ├── hooks                 # Custom React hooks
│   ├── lib                   # Metadata, JSON-LD helpers, utilities
│   ├── contents              # MDX content for pages (research, projects, etc.)
│   └── types.d.ts            # Global type definitions
├── next.config.ts            # Next.js configuration
├── tsconfig.json             # TypeScript configuration
├── eslint.config.mjs         # ESLint configuration
├── package.json              # Scripts & dependencies
└── pnpm-lock.yaml            # pnpm lockfile
```

## ❤️ About Enju Folio

After years of juggling fragile themes, plugin conflicts, and performance issues, I wanted something small, understandable, and kind to maintain.

Enju Folio is my answer:
a **Next.js-based academic portfolio** that is:

- Easy to configure for your own name, affiliations, and work
- Strong enough for real-world use
- Minimal enough that you can read through the code and actually understand it

If this template helps you present your work more comfortably, that’s exactly what it’s here for.

## 🔗 Community & Contributions

Contributions are very welcome — whether it’s bug fixes, documentation improvements, or new ideas.

- 🐛 **Found a bug?** Please open an [issue](https://github.com/ZL-Asica/EnjuFolio/issues/new?template=bug_report.yml).
- 💡 **Have suggestions?** Issues and PRs are both appreciated.
- 🔧 **Want to contribute?** See the [Contribution Guide](./CONTRIBUTING.md) for details.

If you’re using Enju Folio for your own portfolio, I’d also love to hear about it!

<!-- Badges / Links -->

[eslint-badge]: https://img.shields.io/badge/eslint-4B32C3?logo=eslint&logoColor=white
[eslint-link]: https://www.npmjs.com/package/eslint-config-zl-asica
[license-badge]: https://img.shields.io/github/license/ZL-Asica/EnjuFolio
[license-link]: ./LICENSE
[nextjs-badge]: https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white
[nextjs-link]: https://nextjs.org
[node-badge]: https://img.shields.io/badge/node%3E=20-339933?logo=node.js&logoColor=white
[node-link]: https://nodejs.org/
[pnpm-badge]: https://img.shields.io/github/package-json/packageManager/ZL-Asica/Enju-Portfolio?label=&logo=pnpm&logoColor=fff&color=F69220
[pnpm-link]: https://pnpm.io/
[prettier-badge]: https://img.shields.io/badge/Prettier-F7B93E?logo=Prettier&logoColor=white
[prettier-link]: https://www.npmjs.com/package/@zl-asica/prettier-config
[release-badge]: https://img.shields.io/github/v/release/ZL-Asica/EnjuFolio?display_name=release&label=EnjuFolio&color=fc8da3
[release-link]: https://github.com/ZL-Asica/EnjuFolio/releases/
[tailwind-badge]: https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white
[tailwind-link]: https://tailwindcss.com/
[vercel-badge]: https://img.shields.io/badge/Vercel-%23000000.svg?logo=vercel&logoColor=white
[vercel-button]: https://vercel.com/button
[vercel-deploy-link]: https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FZL-Asica%2FEnjuFolio&env=ENABLE_EXPERIMENTAL_COREPACK&envDescription=This+option+enables+Corepack+by+default+to+use+pnpm.+Set+this+to+1.&envLink=https%3A%2F%2Fvercel.com%2Fdocs%2Fbuilds%2Fconfigure-a-build%23corepack&project-name=enju-folio&repository-name=EnjuFolio&redirect-url=https%3A%2F%2Fenju.zla.app%2F&demo-title=EnjuFolio+Demo&demo-description=Live+demo+of+EnjuFolio+using+elaraliu.com.&demo-url=https%3A%2F%2Felaraliu.com%2F
[vercel-link]: https://vercel.com
