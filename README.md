# r2hu1 — Portfolio

Personal portfolio site built with [Next.js 16](https://nextjs.org) (App Router), React 19, TypeScript, Tailwind CSS v4, and Framer Motion.

## Setup

```bash
pnpm install
pnpm dev        # → http://localhost:3000
```

## Environment

| Variable               | Required | Description                          |
| ---------------------- | -------- | ------------------------------------ |
| `GITHUB_ACCESS_TOKEN`  | Yes      | GitHub PAT with `repo` and `read:user` scopes |

Copy `.env.example` to `.env` and fill in the token. The token is used by API routes at `/api/github/cont` and `/api/github/pinned` to fetch contribution data and pinned repositories.

## Project Structure

```
app/
  api/github/       # GitHub GraphQL API proxies (cont, pinned, stats)
  layout.tsx        # Root layout with dark mode, fonts, analytics
  page.tsx          # Home page composing all sections
  sitemap.ts        # Dynamic sitemap
  globals.css       # Tailwind v4 + CSS variables (dark-only theme)
components/
  preloader.tsx           # Fullscreen avatar animation on load
  preloader-context.tsx   # Context for preloader state
  header.tsx              # Avatar, name, social links
  hero.tsx                # Bio, buttons, GitHub contribution heatmap
  working.tsx             # Work experience timeline
  projects.tsx            # Featured + GitHub Pinned projects tabs
  project-card.tsx        # Individual project card
  heatmap-calendar.tsx    # GitHub-style contribution calendar
  ui/                     # Only used UI primitives (button, card, skeleton, sonner, tooltip)
lib/
  constants.ts    # Site config (name, social links, email, etc.)
  utils.ts        # cn() helper (clsx + tailwind-merge)
```

## Key Decisions

- **Force dark mode** — the `<html>` tag has `className="dark"` and `colorScheme: dark`. No theme toggle.
- **Sonner toasts** — used for clipboard-feedback in the hero section.
- **Framer Motion LayoutGroup** — coordinates the avatar `layoutId` transition between the preloader and the header.
- **Preloader** — a 1500ms timeout shows a pulsing avatar, then the page content fades in.

## GitHub Rate Limits

The GraphQL API routes use `GITHUB_ACCESS_TOKEN` for authenticated requests (higher rate limits). The contributions route is called once on page load and cached client-side in component state.

## Modifying Content

Edit `lib/constants.ts` to update name, description, social links, and email. Work experience lives in `components/working.tsx`. Featured projects are in `components/projects.tsx`.

## Build

```bash
pnpm build    # Outputs to .next/
pnpm start    # Production server
pnpm lint     # ESLint
```
