# Go Lucky Productions

The studio website for Borrowed Light and Block Fit: Cozy Village. Built with Next.js App Router, React, TypeScript, and Tailwind CSS.

## Local development

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Run `npm run lint` and `npm run build` before publishing.

## Pages and content

- `/` — studio homepage, featuring Borrowed Light and Block Fit.
- `/borrowed-light` — game overview, feature artwork, and full-size screenshot links. Currently marked **Coming soon** because the game is in internal testing. Update the availability copy and add the public store link when it launches.
- `/block-fit` — game overview, screenshots, and Google Play link.
- `/about` — studio story and contact details (`#contact`).
- `/privacy-policy` and `/terms-of-service` — shared legal pages.
- `/sitemap.xml` and `/robots.txt` — generated from the App Router metadata routes.

Shared navigation and footer live in `app/layout.tsx`, branding in `app/components/brand.tsx`, and styles in `app/globals.css`. `app/site.ts` contains the canonical site URL and Block Fit store URL. The existing `/bf` and `/block-fit/get` redirects remain in `next.config.ts`.

Borrowed Light's website copies live in `public/borrowed-light/`. The original artwork and approved Google Play screenshots remain in `../LittleShadow/art/branding/`. Update website copies from those originals; do not move the original game assets.

The waitlist endpoint in `app/api/waitlist` is a legacy Loops integration and is not linked from the current pages. It requires `LOOPS_API_KEY`; do not commit local environment files.

## Deployment

This repository's established deployment workflow uses Vercel, with deployments from GitHub's `main` branch. Pushing to `main` may publish immediately; verify the target project and build before doing so. Other branches can be used for Vercel preview deployments.

Local QA output and browser profiles belong in the ignored `.site-runtime/` folder.
