# Buy 2 Fun Website

Premium Next.js e-commerce website built with TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Modern, responsive homepage with hero, features, testimonials, pricing, FAQ, blog preview, and contact form
- Dark/light theme system
- Secure form validation and API-ready contact endpoint
- NextAuth Credentials auth scaffold with protected dashboard route
- SEO-ready metadata, Open Graph tags, sitemap, and robots.txt
- Optimized Tailwind CSS and reusable component architecture

## Folder structure

- `app/` — Next.js App Router pages, layouts, and API routes
- `components/` — Reusable UI components and page sections
- `lib/` — Content, validation, and auth helpers
- `public/` — Static assets, sitemap, robots.txt

## Setup

1. Install dependencies

```bash
npm install
```

2. Add environment variables in `.env.local`

```bash
NEXTAUTH_SECRET=your-secret-value
AUTH_EMAIL=admin@yourdomain.com
AUTH_PASSWORD=SuperSecurePassword123!
```

3. Run development server

```bash
npm run dev
```

4. Build for production

```bash
npm run build
npm start
```

## Deployment

Deploy the site to Vercel by connecting the repository. Add the same environment variables in Vercel settings and set the root to the project folder.

## Notes

- The contact endpoint is API-ready and can be extended to connect email providers or CRM services.
- The authentication system is scaffolded with secure environment values and can be expanded to external identity providers.
# vanktesh-buy2fun
