# Dr. Maya Reynolds, PsyD — Therapy Practice Redesign

🔗 **Live Demo**: https://grow-my-therapyassignment.netlify.app/

> **Grow My Therapy** — Front-End Developer Internship Assignment  
> Homepage clone, responsive redesign, and custom section implementation for a modern mental health practice.

---

## 📋 Overview

This project is a high-polish mental health practice website developed for the **Grow My Therapy** Front-End Internship assessment. The objective was to recreate an existing therapy practice homepage layout with high structural accuracy, redesign the aesthetic and copy using an imaginary therapist's profile as the single source of truth, and add a creative custom section.

### Original Template Cloned
- **Reference Site**: [Conejo Valley Family Counseling](https://www.conejovalleycounseling.com/home)

### Therapist Profile Redesign
- **Therapist**: Dr. Maya Reynolds, PsyD — Licensed Clinical Psychologist
- **Location**: Santa Monica, California & Statewide Telehealth
- **Specialties**: Anxiety & Panic, Trauma (EMDR), Professional Burnout & Perfectionism, Somatic & Nervous System Grounding

---

## 🧩 Assignment Execution

### Part 1: Clone the Homepage (UI Accuracy & Layout Replication)
- **1:1 Structure & Order**: Recreated the exact section flow, two-column layouts, asymmetric grids, and footer structure from the original template.
- **Typography & Font Pairing**: Integrated Google Fonts matching the original feel: **Cormorant Infant** (editorial serifs and signature bold-italic script accents) paired with **Mulish** (clean, accessible sans-serif body text).
- **Responsive Architecture**: Fully responsive across three breakpoints (1440px desktop, 768px tablet, and 375px mobile). Features an interactive mobile slide-in drawer with hamburger-to-X transition and background scroll lock.
- **Design Tokens**: Standardized spacing (`--page-padding`, `--section-padding-y`, `--max-width`) and theme tokens for maintainability.

### Part 2: Creative Redesign (Profile-Driven Theme & Copywriting)
- **Cohesive Earthy Palette**: Designed a warm, grounding color system suited for trauma and anxiety therapy:
  - **Primary**: Sage Green (`#8A9A86` / `#71826D` hover)
  - **Secondary**: Soft Slate Blue (`#7A8B99`)
  - **Backgrounds**: Warm Cream (`#F5F2EB`) & Soft Linen (`#FAF8F5`)
  - **Text & Headings**: Deep Slate Charcoal (`#2C3E50`) for optimal WCAG AA contrast
- **Profile-Grounded Copywriting**: Every headline, paragraph, and FAQ answer was derived from Dr. Maya Reynolds' profile, addressing high-achieving professionals, entrepreneurs, and creatives experiencing chronic stress or trauma.
- **Local SEO**: Optimized H1 titles, body copy, and metadata for high-intent search terms (*"Anxiety & Trauma Therapy for High-Achievers in Santa Monica, CA"*, *"EMDR therapy Santa Monica"*, *"California telehealth"*).

### Part 3: Custom "Our Office" Section (Creative Thinking Test)
- **Placement**: Positioned between *Specialties* and *FAQs* to provide an inviting, humanizing transition before the FAQ section.
- **Header & Footer Navigation**: Direct anchor links (`#our-office`) in the top navigation bar and footer for immediate discoverability.
- **Curated Photography**: Side-by-side gallery displaying the Santa Monica consultation space with natural lighting and calming decor.
- **Three Pillar Cards**:
  1. **Santa Monica Sanctuary**: Address details (*123th Street 45 W*), convenient parking, and discreet entrance.
  2. **In-Person & Telehealth**: Highlighting session flexibility across California.
  3. **Grounded in Comfort & Safety**: Highlighting acoustic privacy, soft lighting, and nervous-system calming design.

---

## 🔍 What's Inside the Website

The single-page web app includes 14 structured sections:

1. **Sticky Header & Mobile Drawer**: Logo branding, smooth-scrolling navigation links, and direct consultation CTA button.
2. **Hero Section**: 50/50 split with photography, SEO H1 heading with bold-italic script accent, and direct appointment trigger.
3. **Introduction Section**: Two-column practice philosophy text paired with interior photography.
4. **Who We Help**: 3-card grid targeting Adults & High-Achievers, Anxiety & Panic, and Trauma & Burnout.
5. **Quote Banner**: Full-width atmospheric background image with calming inspirational text.
6. **Areas of Expertise**: 2-column checklist of therapeutic modalities (CBT, EMDR, Somatic Experiencing, Mindfulness).
7. **About Dr. Maya Reynolds**: Complete professional bio, credentials, therapeutic philosophy, and official therapist portrait.
8. **Honoring Transition**: Mid-page grounding statement.
9. **Our Specialties**: 4 clinical focus cards (Anxiety, Trauma & EMDR, Burnout & Perfectionism, Somatic Grounding) with "Learn More" actions.
10. **Our Office (Custom Section)**: Photos of the physical therapy space and pillars emphasizing comfort, confidentiality, and hybrid access.
11. **Interactive FAQs**: Accordion FAQ list answering questions about in-person vs. telehealth, therapeutic modalities, and scheduling.
12. **CTA / Schedule Section**: Symmetrical three-column consultation banner with contact email integration.
13. **Four-Column Footer**: Practice summary, site navigation links, specialties directory, and Santa Monica contact info.
14. **Legal & Compliance Bar**: Links for Terms of Service, Privacy Policy, Disclaimer, and copyright.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & CSS Variable Design Tokens
- **Typography**: [Google Fonts](https://fonts.google.com/) (*Cormorant Infant* & *Mulish*)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Deployment**: [Netlify](https://www.netlify.com/) / [Vercel](https://vercel.com/)

---

## 💻 Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rwt-aman/grow-my-therapy-assignment.git
   cd grow-my-therapy-assignment
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📄 License

This repository was created as an evaluation assignment for **Grow My Therapy**. All code is open for review and educational use.
