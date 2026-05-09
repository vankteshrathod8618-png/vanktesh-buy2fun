# AGENTS Documentation

## Project Overview
This repository contains a premium Next.js website scaffold built for a modern launch platform called Aurea. The site is designed for production use with a responsive homepage, dark/light theme support, reusable components, SEO metadata, form handling, and authentication scaffolding.

## Tech Stack
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- NextAuth for authentication
- Validator helpers for secure input handling

## Architecture and Folder Structure
- `app/`
  - `layout.tsx` — root layout with global metadata and theme provider
  - `page.tsx` — homepage content and section composition
  - `signin/page.tsx` — client-side sign-in page
  - `dashboard/page.tsx` — protected dashboard route with server session check
  - `api/contact/route.ts` — contact form API endpoint
  - `api/auth/[...nextauth]/route.ts` — NextAuth route handler
  - `globals.css` — global styles and Tailwind base
- `components/`
  - `button.tsx` — reusable button component with accessible props
  - `navbar.tsx` — responsive navigation bar with dark/light toggle
  - `footer.tsx` — site footer with links and social navigation
  - `theme-provider.tsx` — client theme context and persistence
  - `hero-section.tsx` — animated hero section using Framer Motion
  - `feature-card.tsx` — reusable feature card component
  - `testimonials.tsx` — testimonial card section
  - `pricing.tsx` — pricing plan cards
  - `faq.tsx` — accordion FAQ section
  - `blog-preview.tsx` — blog preview cards
  - `contact-form.tsx` — contact form with validation and submission handling
  - `section-heading.tsx` — consistent section heading component
- `lib/`
  - `content.ts` — reusable content data for features, pricing, testimonials, FAQ, and blog posts
  - `validation.ts` — form validation helper functions
  - `auth.ts` — NextAuth options and credentials provider setup
- `public/`
  - `robots.txt`
  - `sitemap.xml`
- Root config files: `package.json`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.js`, `next.config.mjs`

## Key Features
- Modern, premium homepage layout with hero, product sections, testimonials, pricing, FAQ, blog preview, and contact form.
- Dark/light theme toggle persisted via `localStorage`.
- Reusable UI components for scalable development.
- API-ready contact endpoint with secure server-side validation.
- Authentication scaffold using NextAuth Credentials provider.
- SEO and performance-oriented site metadata, Open Graph support, sitemap, and robots policy.
- Tailwind-driven design system with glassmorphism and premium spacing.

## Fixes and Notes
- Resolved `app/layout.tsx` import and JSX typing issues by installing dependencies and adding `global.d.ts` for CSS module declarations.
- Fixed a compile-time TypeScript issue in `components/button.tsx` by adding `disabled` and `aria-label` support to `ButtonProps`.
- Addressed a `tsconfig.json` deprecation warning by configuring `ignoreDeprecations` for the current TypeScript version.
- Moved client-side Framer Motion animation usage into a dedicated `hero-section.tsx` component with `'use client'` to avoid React Server Components bundler issues.
- Corrected the homepage structure in `app/page.tsx` to restore valid markup and section layout.

## Environment and Deployment
### Required environment variables
- `NEXTAUTH_SECRET` — NextAuth secret string
- `AUTH_EMAIL` — authentication credential email
- `AUTH_PASSWORD` — authentication credential password

### Local development
```bash
npm install
npm run dev
```

### Production build
```bash
npm run build
npm start
```

### Vercel deployment
- Connect the repository to Vercel.
- Add required environment variables in Vercel settings.
- Deploy using the default Next.js build settings.

## Current Status
- TypeScript compile check passes using `npx tsc --noEmit`.
- Dependency installation completed successfully.
- The project is structured for further enhancement and production readiness.

## Changelog
- Added a premium Next.js website scaffold with reusable components and responsive sections.
- Implemented a dark/light theme provider and persisted theme preference.
- Added secure contact API, validation helpers, and authentication scaffolding.
- Resolved layout and compile issues related to CSS module declarations, Framer Motion client usage, and button props.
- Documented project architecture, deployment instructions, and setup steps in `AGENTS.md`.
