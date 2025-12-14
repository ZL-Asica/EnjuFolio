# Changelog

All notable changes to this project will be documented in this file.

The format is loosely based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.1] - 2025-12-14

### Fixed

- Solve the critical security vulnerability bug [CVE-2025-55182](https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components).

### Updated

- Remove `AILLMGuides` component from the home page to reduce clutter.
- Improved accessibility in header and menu components.
  - Added `aria-hidden="true"` to decorative icons.
  - Added skip to main content link for better keyboard navigation.
- Update auto realse GitHub workflow.

## [0.2.0] - 2025-11-23

### Added

- `AILLMGuides` component to display the AILLM Guides section on the home page.
  - As the prompt for AI/LLM-based systems to summarize and understand the author's work and website's content.
  - Collapsible section design to avoid overwhelming the UI.
  - Custom styling for lists within the guides for better readability.
  - Content stored in `src/contents/AILLMGuides.mdx` for easy editing.

### Changed

- Improve SEO for meta and JSON-LD
  - Extract description to one place in `src/utils/pages-descriptions.ts` for consistency and easier updates.
  - Add multiple fileds in JSON-LD for better search engine understanding and LLM's consumption.
  - Updated `enju.config.ts` to reflect these changes.

- Improve `llms.txt` generation
  - Some minor stylling issues fixed.
  - Add slot to inject custom content at the top of the file.

## [0.1.0] - 2025-11-13

### Added

#### Core pages & content

- Initial public release of the site.
- **Home** page with a short intro, quick links, and a hobbies section.
- Dedicated **Research** and **Projects** pages with structured cards, categories, and optional PDF/DOI links.
- **CV** page with clear sections, an email obfuscation scheme, and a loading skeleton for better perceived performance.
- Basic **News** listing powered by markdown, with configurable cut-off year and maximum number of items.

#### Layout & UX

- Shared layout with header, footer, and year-grouped content cards for research, projects, and news.
- Table of contents (TOC) component with scroll/selection logic for long posts.
- Responsive typography and spacing tuned for both desktop and mobile.
- Subtle animations on the home page and content pages, extracted into reusable animation utilities.
- Accessibility improvements including better ARIA attributes in the header and a per-page `main` element structure.
- Markdown readability tweaks for tables, paragraphs, and headings.

#### SEO, feeds & crawlers

- Site-wide metadata and JSON-LD, including a dedicated OG image for the CV page.
- Automatic generation of `sitemap.xml` and an RSS feed for the site.
- `robots.txt` rules that block query URLs while exposing main content to search engines.
- Auto-generated `llms.txt` and crawler-friendly configuration for search/AI crawlers.

#### Configuration & customization

- Centralized config for basic profile information, external links, and news date behavior (format, cut-off, and limits).
- Theme hooks with primary colors and animation settings extracted into a single custom styles file for easier theming.
- Canonical site URL and domain handling extracted into shared utilities so feeds and metadata stay consistent.

#### Tooling & infrastructure

- Built on **Next.js 16** with **Turbopack** as the default dev/build engine.
- File-system access moved to the server side, with components decomposed and given loading fallbacks.
- Dependency tree cleaned up and updated for the first public release.
- GitHub workflows, commit linting, and basic project metadata (README status + watch instructions) to support open-source use and contributions.
