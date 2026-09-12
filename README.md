# InterProFinland Website

Rebuild of the website for **International Professionals Finland ry (InterProFinland)** — a Finnish association supporting international professionals integrating into the Finnish workforce.

Live reference: https://interprofinland.fi

## Tech Stack

- **Framework:** Next.js (App Router), statically exported (`output: 'export'`)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod
- **Nature:** Fully static site — no server, no database. All content lives in `src/lib/data/`.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # static export, output in /out
npm run lint
```

## Environment Variables

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_FORM_ENDPOINT` — a Formspree/Web3Forms-style endpoint for the contact form. Without it, the form runs in local demo mode (shows a success state but doesn't send anywhere).

## Project Structure

```
src/
├── app/                # Routes (App Router)
├── components/
│   ├── layout/          # Navbar, Footer, PageHero, MobileMenu
│   ├── ui/               # Button, Card, Modal, SectionHeading, etc.
│   ├── sections/        # Homepage section blocks
│   ├── forms/            # ContactForm, NewsletterForm
│   └── icons/            # Hand-rolled social icons (Lucide dropped brand icons)
└── lib/
    ├── constants.ts     # Site-wide config, nav links, contact info
    └── data/              # Page content: programs, team, testimonials, partners, events, magazine
```

## Content Notes

- Team, testimonial, and partner photos/logos were sourced from the live interprofinland.fi site and are checked into `public/images/` and `public/logos/`.
- The two "About Us in 60 seconds" videos are **not** committed (see `.gitignore`) — they're ~109MB each. Host them externally (CDN, Git LFS, or similar) and place them at `public/assets/videos/about-us-en.mp4` / `about-us-fi.mp4` before deploying.
- Testimonial full stories, magazine issue links, and partner logos were verified against the live site rather than invented — see commit history / data files for sourcing notes where relevant.

## Deployment

This is a static export — the `npm run build` output in `/out` can be served from any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc.).
