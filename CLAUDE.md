# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # development server
npm run build    # production build
npm run start    # start production server
npm run lint     # ESLint
```

## Architecture

Marketing/service website for a biomass boiler company in South West England.

**Stack:** Next.js 16 App Router · TypeScript · Tailwind CSS 4 · React 19 · MDX

**Key directories:**
- `app/` — App Router pages; one directory per route. Location-specific pages follow pattern `app/biomass-boiler-servicing-and-repair-[town]/`
- `components/` — Shared UI (Hero, CTAStrip, ImagePlaceholder, motion-animated sections)
- `lib/` — Static content data (site config, brands, case studies) and `getAllPosts()` blog utility
- `app/api/` — Server actions/routes; uses Resend for email and Anthropic SDK for AI features
- `app/blog/` — MDX-powered blog; frontmatter parsed via gray-matter

**Brand tokens (Tailwind CSS variables):** `--cream`, `--green`, `--amber`

**Forms:** React Hook Form + Zod validation; submissions go through `app/api/` routes to Resend.

**Content pattern:** Static data lives in `lib/`; pages import and render it rather than fetching from a CMS.
