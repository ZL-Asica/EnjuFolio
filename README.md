# Enju Folio

> Enju (槐 🌳 in Japanese) — a symbol of knowledge and elegance.

A minimalist, accessible, and beautifully structured academic portfolio template built with Next.js and Tailwind CSS. Designed to showcase your research, projects, and publications with clarity and style.

---

🚧 **Under Construction**
This project is still in development and not yet ready to be used as a theme or template — even though it currently has no major bugs or performance issues.

If you're interested in updates, click the **"Watch"** button at the top right, select **"Custom" → "Releases"** to be notified when it's ready!

---

🚀 **[Live Demo](https://www.zla.app)**

[![Node.js][node-badge]][node-link] [![pnpm Version][pnpm-badge]][pnpm-link] | [![Next.js][nextjs-badge]][nextjs-link] [![Tailwind CSS][tailwind-badge]][tailwind-link] | [![Vercel][vercel-badge]][vercel-link] [![Eslint][eslint-badge]][eslint-link] [![Prettier][prettier-badge]][prettier-link]

## 🏗️ Project Structure

```plaintext
.
├── public                    # Static assets directory
│   └── images                # Image resources
├── src                       # Project source code
│   ├── app                   # Next.js application directory
│   ├── components            # Reusable components
│   │   ├── common            # Common components
│   │   │  └── layout         # Layout components
│   │   └── ...               # Other pages' components
│   ├── hooks                 # Custom hooks
│   ├── lib                   # For Metadata and JSON-LD
│   ├── contents              # All pages' MDX contents
│   └── types.d.ts            # Global type definitions
├── next.config.ts            # Next.js config file
├── tsconfig.json             # Typescript config file
├── eslint.config.mjs         # Eslint configuration
├── package.json              # Project dependencies and scripts
└── pnpm-lock.yaml            # pnpm dependency lock file
```

## 🚀 Getting Started

### 1. Node.js Environment Setup

Make sure you have Node.js (>= 20.0.0) installed on your machine. Recommend using LTS version.

Check whether you have `pnpm` installed by running:

```bash
pnpm --version
```

If you don't have `pnpm` installed, you can install it by running:

```bash
npm install --global corepack@latest
corepack enable pnpm
```

If any error occurs, please refer to the [official installation documentation](https://pnpm.io/installation).

### 2. Dependencies Installation (with pnpm)

Run the following command to install all dependencies (in the root directory):

```bash
pnpm install
```

### 3. Development

To start the development server, run:

```bash
pnpm dev
```

And open [http://localhost:3000/](http://localhost:3000/) in your browser.

### 4. Production (Preview)

To build the production version, run:

```bash
pnpm build
```

And to start the production server, run:

```bash
pnpm start
```

### 5. Linting

> **Note**: This step is only for developing purpose.

Auto linting on save and commit is already set up. You can also run the following command to lint the code:

```bash
pnpm run lint:fix
```

<!-- Badges / Links -->

[eslint-badge]: https://img.shields.io/badge/eslint-4B32C3?logo=eslint&logoColor=white
[eslint-link]: https://www.npmjs.com/package/eslint-config-zl-asica
[nextjs-badge]: https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white
[nextjs-link]: https://nextjs.org
[node-badge]: https://img.shields.io/badge/node%3E=20-339933?logo=node.js&logoColor=white
[node-link]: https://nodejs.org/
[pnpm-badge]: https://img.shields.io/github/package-json/packageManager/ZL-Asica/Enju-Portfolio?label=&logo=pnpm&logoColor=fff&color=F69220
[pnpm-link]: https://pnpm.io/
[prettier-badge]: https://img.shields.io/badge/Prettier-F7B93E?logo=Prettier&logoColor=white
[prettier-link]: https://www.npmjs.com/package/@zl-asica/prettier-config
[tailwind-badge]: https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white
[tailwind-link]: https://tailwindcss.com/
[vercel-badge]: https://img.shields.io/badge/Vercel-%23000000.svg?logo=vercel&logoColor=white
[vercel-link]: https://vercel.com
