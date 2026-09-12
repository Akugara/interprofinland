# InterProFinland Website Rebuild — Cursor Prompt

> **Use this document as the master specification when building the InterProFinland website. Follow every section carefully.**

---

## 1. Project Overview

Rebuild the website for **International Professionals Finland ry (InterProFinland)** — a Finnish association that supports international professionals in integrating into the Finnish workforce. The current site is at `https://interprofinland.fi/`.

The redesign should feel **modern, minimalistic, and professional** while keeping the warm, inclusive, community-driven spirit of the organization. Think clean Nordic design with generous whitespace, smooth scroll animations, and a confident use of their deep-blue brand color.

### Tech Stack

- **Framework:** Next.js 14+ (App Router, static export via `output: 'export'` in `next.config.js`)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (subtle fade-ins, scroll reveals, parallax hero)
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation (contact form submits to a third-party service like Formspree or Web3Forms since there is no backend)
- **Deployment target:** Vercel (or any static host — Netlify, Cloudflare Pages, etc.)
- **Nature:** Fully static site — no server-side rendering, no API routes, no database. All content is hardcoded or in local data files.

---

## 2. Design System

### 2.1 Color Palette

| Token               | Hex       | Usage                                                        |
| -------------------- | --------- | ------------------------------------------------------------ |
| `--color-primary`    | `#003580` | Headers, nav, buttons, primary backgrounds, footer           |
| `--color-secondary`  | `#2a77bd` | Links, hover states, accents, secondary buttons              |
| `--color-yellow`     | `#f9b121` | Highlights, badges, CTAs that need attention, star accents   |
| `--color-black`      | `#060709` | Body text, headings on light backgrounds                     |
| `--color-green`      | `#0da84c` | Success states, positive indicators, "open" status badges    |
| `--color-red`        | `#f02c30` | Alerts, error states, urgent badges                          |
| `--color-white`      | `#ffffff` | Backgrounds, text on dark surfaces                           |
| `--color-gray-50`    | `#f8fafc` | Alternate section backgrounds (very light gray)              |
| `--color-gray-100`   | `#f1f5f9` | Card backgrounds, input fields                               |
| `--color-gray-400`   | `#94a3b8` | Muted text, placeholders                                     |
| `--color-gray-600`   | `#475569` | Secondary body text                                          |

### 2.2 Typography

- **Headings:** `Inter` (weight 700 for h1–h2, 600 for h3–h4) — or `Outfit` as an alternative
- **Body:** `Inter` (weight 400, 16px base, 1.6 line-height)
- **Accent / Labels:** `Inter` (weight 500, uppercase tracking for section labels)

Scale (desktop → mobile):
- h1: 56px → 36px
- h2: 40px → 28px
- h3: 28px → 22px
- Body: 16px → 15px

### 2.3 Spacing & Layout

- Max content width: `1200px`, centered
- Section vertical padding: `96px` (desktop), `64px` (mobile)
- Component gap rhythm: multiples of `8px`
- Border radius: `12px` for cards, `8px` for buttons, `full` for avatar images
- Side gutters: `24px` minimum on mobile

### 2.4 Components Style

- **Buttons:** Rounded (`border-radius: 8px`), solid primary blue for main CTAs, outline variant for secondary actions. Subtle hover lift (`translateY(-2px)` + shadow).
- **Cards:** White background, subtle `box-shadow` (`0 1px 3px rgba(0,0,0,0.08)`), `12px` border radius. On hover: slight shadow increase.
- **Section transitions:** Alternate between white and `gray-50` backgrounds to create visual rhythm.
- **Decorative accents:** Use the 5 star colors (blue, yellow, black, green, red) sparingly as small decorative dots or thin accent lines to echo the logo's stars.

### 2.5 Logo Assets

Place these files in `/public/logos/`:

| File                          | Description                                |
| ----------------------------- | ------------------------------------------ |
| `logo-full.png`               | Full logo: globe + stars + text (for light backgrounds) |
| `logo-full-white.png`         | Full logo white variant (for dark backgrounds like footer/nav) |
| `logo-icon.png`               | Globe icon only (for favicon, mobile nav, small uses) |
| `logo-icon-white.png`         | Globe icon white variant                   |

Use the **full logo** in the navbar (desktop) and footer. Use the **icon-only** version as favicon and for mobile-collapsed nav.

---

## 3. Site Structure & Pages

```
/                       → Homepage
/about                  → About Us
/programs               → Programs & Services
/magazine               → Magazine / Blog
/testimonials           → Testimonials
/get-involved           → Membership, Mentoring, Volunteering
/contact                → Contact Us
/privacy-policy         → Privacy Policy
/cookie-policy          → Cookie Policy
```

---

## 4. Global Layout

### 4.1 Navbar

- **Style:** Fixed/sticky, white background with subtle bottom shadow on scroll. Transparent on homepage hero, transitioning to white on scroll.
- **Desktop:** Full logo on the left. Nav links centered or right-aligned: Home, About Us, Programs, Magazine, Testimonials, Get Involved, Contact. A prominent **"Join Us"** CTA button (primary blue, solid) on the far right.
- **Mobile:** Icon-only logo left, hamburger menu right. Full-screen overlay menu on open with smooth slide-in animation. Nav links stacked vertically, large tap targets.
- **Active state:** Underline or bottom-border accent on the current page link.

### 4.2 Footer

- **Background:** Deep blue (`#003580`)
- **Layout (desktop):** 4-column grid:
  1. **Logo & tagline:** White full logo + one-liner mission summary
  2. **Quick Links:** About, Programs, Magazine, Testimonials
  3. **Get Involved:** Membership, Mentoring, Volunteer, Contact
  4. **Connect:** Social media icons (Facebook, Instagram, LinkedIn) + WhatsApp link + office address
- **Bottom bar:** Copyright line + links to Privacy Policy and Cookie Policy
- **Text color:** White and light blue (`#2a77bd`) for links

### 4.3 Shared Elements

- **Back-to-top button:** Appears on scroll, bottom-right, circular, primary blue
- **Cookie consent banner:** Minimal, bottom of screen, with accept/manage buttons
- **Page transition:** Subtle fade between route changes

---

## 5. Page Specifications

---

### 5.1 Homepage (`/`)

The homepage is the most important page. It should immediately communicate what InterProFinland does and inspire action.

#### Hero Section
- **Layout:** Full-viewport-height section with a deep blue (`#003580`) background
- **Content:** Large heading: *"Empowering International Professionals in Finland"* — Subheading: *"We provide tailored guidance and a support network to help you overcome barriers, utilize your skills, and build a meaningful career."*
- **CTAs:** Two buttons — "Explore Our Programs" (white/outline) and "Become a Member" (yellow `#f9b121`)
- **Visual:** Subtle animated background — could be a slow-moving gradient, abstract geometric pattern, or a looping video (the client has video assets in an `/assets/videos/` folder). The five star colors can appear as floating soft-glow dots.
- **Scroll indicator:** Small animated chevron at the bottom

#### "Why We Exist" Section
- **Background:** White
- **Layout:** Two-column (text left, illustration/image right on desktop; stacked on mobile)
- **Content:** Explain the problem of unemployment and underemployment among qualified international professionals in Finland. Mention the gap between skills brought and opportunities available.
- **Stats row:** Display 3–4 key impact numbers in a horizontal strip below the text (e.g., "500+ Professionals Supported", "15+ Partner Organizations", "20+ Nationalities Represented", "Founded 2021"). Animate numbers counting up on scroll.

#### "What We Do" — Programs Overview
- **Background:** Gray-50 (`#f8fafc`)
- **Layout:** Section heading centered, then a grid of 6 program cards (3×2 on desktop, 1-column on mobile)
- **Cards:** Each card has an icon (Lucide), a title, a short description (2 lines), and a "Learn More →" link to `/programs`
- **Programs to show:**
  1. **Degree Recognition Support** — "Step-by-step guidance to get your qualifications recognized in Finland."
  2. **Mentorship Program** — "One-on-one mentoring from professionals who've walked the same path."
  3. **Career Guidance** — "CV clinics, coaching, and job market insights tailored to Finland."
  4. **Networking Opportunities** — "Connect with employers, peers, and organizations in our community."
  5. **Language Support** — "Kielikaverit Finnish Language Club and integration resources."
  6. **Community & Peer Support** — "A 1,000+ member community of international professionals."

#### Membership CTA Banner
- **Background:** Gradient from `#003580` to `#2a77bd`
- **Layout:** Centered text block
- **Content:** *"Join a community that understands your journey"* — Brief list of 3–4 key member benefits as short phrases — **"Apply for Membership"** button (yellow)

#### Testimonials Preview
- **Background:** White
- **Layout:** Horizontal carousel/slider showing 3 testimonials at a time (1 on mobile), with navigation dots and arrows
- **Card design:** Quote text in italics, name in bold, one-line description of their background. Subtle quotation mark icon as decoration.
- **CTA:** "Read More Stories →" link to `/testimonials`

#### Partners Section
- **Background:** Gray-50
- **Layout:** Section heading "Our Partners & Networks" + horizontally scrolling logo strip (infinite loop marquee). Grayscale logos that colorize on hover.

#### Newsletter / Community CTA
- **Background:** White
- **Layout:** Centered, compact section
- **Content:** "Stay Connected" — short blurb — email input + subscribe button, plus social media icon links

---

### 5.2 About Us (`/about`)

#### Hero
- **Style:** Shorter hero (40vh), deep blue background, page title "About Us" centered, breadcrumb below

#### Mission & Vision
- **Layout:** Two side-by-side cards on a white background
- **Mission card:** Icon + "Our Mission" heading + mission statement text
- **Vision card:** Icon + "Our Vision" heading + vision statement text
- **Mission:** "Providing a support network and tailored guidance to help international professionals in Finland overcome barriers, utilize their skills, and build meaningful careers."
- **Vision:** "An inclusive Finland with a balanced workforce that thrives on both local and international expertise."

#### Our Story
- **Layout:** Text section with optional embedded video (client has video assets)
- **Content:** Tell the founding story — founded in 2021 by Olivia Kumpula, born from personal experience as an expat. Grew from recognizing that international professionals face common barriers. Include a timeline or milestone markers if desired.

#### Our Values
- **Layout:** 5 value cards in a horizontal row (scrollable on mobile)
- **Values with descriptions:**
  1. **Potentiality** — "We believe in developing inherent human abilities."
  2. **Recognition** — "We value people's complete identity and professional background."
  3. **Professionalism** — "We oppose skill underutilization and promote economic enrichment."
  4. **Growth** — "We support professional and personal development."
  5. **Inclusion** — "We ensure all community members feel belonging."
- **Design note:** Each card could use one of the 5 star colors (blue, yellow, black, green, red) as a top accent border to visually tie to the logo.

#### Our Team
- **Layout:** Grid of team member cards (photo, name, role, one-line bio)
- **Team members:**
  - **Olivia Kumpula** — CEO & Founder
  - **Henriika Ilkko** — Chairperson (IT, Quality Management, PMO background)
  - **Matthew Bowen** — CAO
  - *(Add additional team members as provided — media/marketing, project coordinators, language club coordinator, volunteers)*
- **Note:** Team photos should be circular with a subtle border. If no photo, use initials on a colored background.

---

### 5.3 Programs & Services (`/programs`)

#### Hero
- Short hero, deep blue background, title "Our Programs & Services"

#### Programs List
- **Layout:** Full-width sections alternating between white and gray-50 backgrounds, each describing one program in detail
- **Each program section:** Two-column layout (image/illustration + text content), alternating sides

**Programs to detail:**

1. **Degree AMPLIFY — Qualification Recognition**
   - Description: Ongoing yearly project providing step-by-step guidance through Finland's qualification recognition process. Participants receive one-on-one mentoring from professionals with similar experiences.
   - Includes the Qualifications Recognition Handbook
   - CTA: "Apply to Degree AMPLIFY" (link to JotForm)

2. **One Mentor One — Mentorship Program**
   - Description: Structured mentoring initiative pairing international professionals with experienced mentors who share experiences, widen perspectives, and offer career and personal development tips.
   - CTA: "Become a Mentor" / "Find a Mentor"

3. **Career Guidance & Networking**
   - Description: CV clinics, personal coaching, career connect meet & greet events, labour market seminars, info webinars and workshops.
   - CTA: "Contact Us"

4. **Kielikaverit — Finnish Language Club**
   - Description: Peer support language club for practicing Finnish in a relaxed community setting.
   - CTA: "Join the Language Club"

5. **Connect & Integrate Project**
   - Description: Peer support clubs facilitating integration into Finnish society and professional life.

6. **Stronger Communities Project**
   - Description: Current project (period: 1.10.2024 – 28.2.2026) focused on building stronger, more inclusive communities.

#### Handbook CTA
- **Layout:** Highlighted banner section
- **Content:** Promote the "Qualifications Recognition in Finland Handbook" — a key member benefit. CTA to apply for membership to receive it.

---

### 5.4 Magazine (`/magazine`)

#### Hero
- Short hero, title "InterProFinland Magazine", subtitle: "Inspiring, Enlightening, and Celebrating International People in Finland"

#### Magazine Issues
- **Layout:** Grid of magazine issue cards (cover image thumbnail, issue title/number, publish date, "Read" button)
- **Reading experience:** Each card links out to the Heyzine-hosted flipbook. Open in a new tab.
- **Note:** The magazines are hosted externally on Heyzine as embedded flip-books. Link to them rather than trying to embed.

---

### 5.5 Testimonials (`/testimonials`)

#### Hero
- Short hero, title "Success Stories"

#### Testimonials Grid
- **Layout:** Masonry-style or staggered grid of testimonial cards
- **Each card:**
  - Large quotation mark icon (decorative, in a star color)
  - Quote text (key quote from the person)
  - Person's name (bold)
  - Background description (e.g., "International Architect from Italy — Degree Amplify Participant")
  - Optional: small avatar/photo
- **Design:** Alternate accent colors from the star palette for the quotation mark icons across cards

**Testimonials to include:**

1. **Junior Perry** — Architect from Italy, Master's degree recognition. *"The recognition of my degree doesn't change anything and yet changes everything."*
2. **Svetlana Bilevich** — Psychotherapist, Degree Amplify participant. *"I feel like a hero, who has gone through these all challenges."*
3. **Mariam** — Electrical engineer, Degree Amplify participant. *"This project opened my eyes to information I didn't know before."*
4. **Kristina** — Psychologist, Degree Amplify participant. *"Having someone to guide you is great support mentally."*
5. **Kelly** — One Mentor One participant. *"Discovering interests assists in overcoming work-related challenges."*
6. **Cyrille** — Mentorship participant. *"Mentorship made me gain confidence in my integration process."*
7. **Maha** — SATAtalents participant. *"The organization is as helpful as good family members."*
8. **Jichen** — International student, SATAtalents participant. *"You will gain more than you think."*

#### CTA Section
- "Your story could be next" — Link to get-involved / membership

---

### 5.6 Get Involved (`/get-involved`)

#### Hero
- Short hero, title "Get Involved"

#### Ways to Participate
- **Layout:** Section for each pathway, with icon, heading, description, and CTA button

1. **Become a Member**
   - Description: Open to individuals, organizations, and companies aligned with the mission.
   - Benefits: Qualifications Recognition Handbook, personal mentor, members-only webinars/workshops, language lessons, labour market insights.
   - CTA: "Apply for Membership" → links to JotForm application

2. **Become a Mentor**
   - Description: Share your experience to help mentees build skills, grow professionally, and meet career goals.
   - CTA: "Apply as a Mentor" → JotForm link

3. **Volunteer With Us**
   - Description: Open to new ideas and fresh perspectives. Join as a volunteer to impact the lives of international talents.
   - CTA: "Contact Us to Volunteer"

4. **Partner With Us**
   - Description: Organizations and companies can collaborate with InterProFinland on mutual initiatives.
   - CTA: "Discuss Partnership" → email or contact form

5. **Join the Community**
   - Description: Join the 1,000+ member Facebook group for international professionals across Finland.
   - CTA: "Join Facebook Group" → Facebook link

---

### 5.7 Contact Us (`/contact`)

#### Hero
- Short hero, title "Contact Us"

#### Content Layout
- **Two-column:** Contact form on the left, contact details on the right

#### Contact Form
- Fields: Name, Email, Subject (dropdown: General Inquiry, Membership, Partnerships, Degree Recognition, Other), Message
- Submit button (primary blue)
- Success message on submit

#### Contact Details
- **Email:** info@interprofinland.fi
- **Degree Recognition:** degree.amplify@interprofinland.fi
- **WhatsApp:** +358 44 9367069
- **Office:** Otavankatu 5 A, 28100 Pori, Finland
- **Hours:** Mon–Fri 9:00–15:00 (Sat–Sun closed)
- **Visits:** By appointment only on Mondays and Wednesdays
- **Map embed:** Google Maps showing the office location

#### Social Links
- Facebook, Instagram, LinkedIn icons with links

---

### 5.8 Privacy Policy & Cookie Policy

Simple content pages with legal text. Clean typography, no special layout needed beyond the standard page template with short hero + body text.

---

## 6. Responsive Behavior

- **Breakpoints:** `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`
- All grids collapse gracefully: 3-col → 2-col → 1-col
- Navbar collapses to hamburger at `md` breakpoint
- Hero text scales down, images stack below text on mobile
- Carousels become swipeable on touch devices
- All tap targets are at least 44×44px on mobile
- Side gutters of at least 24px on mobile

---

## 7. Animations & Interactions

- **Scroll reveals:** Sections and cards fade-in + slide-up on scroll (Framer Motion `whileInView`)
- **Number counters:** Impact stats count up when they enter the viewport
- **Hover effects:** Cards lift slightly with shadow increase, buttons shift up 2px
- **Hero:** Subtle parallax or slow gradient animation
- **Page transitions:** Fade between routes
- **Logo marquee:** Smooth infinite horizontal scroll for partner logos
- **Testimonial carousel:** Auto-play with pause on hover, swipeable on mobile

Keep animations **subtle and fast** (200–400ms durations). Nothing should feel sluggish or distracting.

---

## 8. SEO & Performance

- **Meta tags:** Unique `title` and `description` for every page
- **Open Graph:** OG image, title, description for social sharing
- **Semantic HTML:** Proper heading hierarchy (one h1 per page), landmark elements (`<nav>`, `<main>`, `<footer>`, `<section>`)
- **Images:** Use Next.js `<Image>` component for automatic optimization. WebP format where possible. All images have `alt` text.
- **Lighthouse target:** 90+ on all categories
- **Sitemap:** Auto-generated `sitemap.xml`
- **robots.txt:** Standard allow-all

---

## 9. Accessibility

- WCAG 2.1 AA compliance target
- Sufficient color contrast on all text (test the blue/white combinations)
- Focus-visible outlines on all interactive elements
- Skip-to-content link
- ARIA labels on icon-only buttons and decorative elements
- Keyboard-navigable menus and carousels
- Reduced-motion media query respects `prefers-reduced-motion`

---

## 10. Content Notes

- **Tone of voice:** Professional but warm, inclusive, encouraging. Avoid jargon. Speak directly to international professionals ("you/your"). Emphasize community, support, and real impact.
- **Language:** English (primary). Consider i18n support structure for Finnish translation later.
- **Images:** The client will provide team photos, event photos, and video assets. Use placeholder images during development. The `/public/assets/videos/` folder will contain About Us videos.

---

## 11. File Structure

```
/
├── public/
│   ├── logos/
│   │   ├── logo-full.png
│   │   ├── logo-full-white.png
│   │   ├── logo-icon.png
│   │   └── logo-icon-white.png
│   ├── images/
│   │   ├── hero/
│   │   ├── team/
│   │   ├── programs/
│   │   └── partners/
│   └── assets/
│       └── videos/
├── src/
│   ├── app/
│   │   ├── layout.tsx          (root layout with nav + footer)
│   │   ├── page.tsx            (homepage)
│   │   ├── about/page.tsx
│   │   ├── programs/page.tsx
│   │   ├── magazine/page.tsx
│   │   ├── testimonials/page.tsx
│   │   ├── get-involved/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── privacy-policy/page.tsx
│   │   └── cookie-policy/page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── PageHero.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   ├── StatCounter.tsx
│   │   │   └── TestimonialCard.tsx
│   │   ├── sections/
│   │   │   ├── WhyWeExist.tsx
│   │   │   ├── ProgramsOverview.tsx
│   │   │   ├── MembershipCTA.tsx
│   │   │   ├── TestimonialsCarousel.tsx
│   │   │   ├── PartnersMarquee.tsx
│   │   │   └── NewsletterCTA.tsx
│   │   └── forms/
│   │       ├── ContactForm.tsx
│   │       └── NewsletterForm.tsx
│   ├── lib/
│   │   ├── constants.ts        (colors, links, social URLs)
│   │   └── data/
│   │       ├── programs.ts
│   │       ├── testimonials.ts
│   │       ├── team.ts
│   │       └── partners.ts
│   └── styles/
│       └── globals.css
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## 12. External Links Reference

| Purpose                       | URL                                                                                       |
| ----------------------------- | ----------------------------------------------------------------------------------------- |
| Membership Application        | `https://form.jotform.com/InterProFinland/membership-application-form`                    |
| Mentor Application            | *(JotForm link — get from client)*                                                        |
| Facebook Page                 | `https://www.facebook.com/interprofinland`                                                |
| Facebook Community Group      | `https://www.facebook.com/groups/interprofinland`                                         |
| Instagram                     | `https://www.instagram.com/interprofinland/`                                              |
| LinkedIn                      | `https://www.linkedin.com/company/international-professional-finland-ry-interpro-finland` |
| General Email                 | `info@interprofinland.fi`                                                                 |
| Degree Recognition Email      | `degree.amplify@interprofinland.fi`                                                       |
| WhatsApp                      | `+358 44 9367069`                                                                         |

---

## 13. Development Order

Build in this sequence for fastest visual progress:

1. **Project setup** — Next.js with static export, Tailwind config with custom colors, global styles, fonts
2. **Layout shell** — Navbar + Footer + PageHero components
3. **Homepage** — All sections top to bottom
4. **About Us** — Mission, story, values, team
5. **Programs** — Full program detail page
6. **Testimonials** — Masonry grid
7. **Get Involved** — Membership and participation pathways
8. **Contact** — Form + details + map
9. **Magazine** — Simple card grid linking to Heyzine
10. **Legal pages** — Privacy + Cookies
11. **Polish** — Animations, SEO meta, final responsive QA
