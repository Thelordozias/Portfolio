# Ozias Kafando — Portfolio

Personal portfolio built with **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🗂 Project Structure

```
portfolio/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout — Nav + metadata
│   ├── page.tsx                  # Home page (/)
│   ├── globals.css               # Global styles + 3D CSS + keyframes
│   ├── projects/
│   │   └── page.tsx              # /projects — full project list
│   └── research/
│       ├── page.tsx              # /research — 3D perspective list
│       └── [id]/
│           └── page.tsx          # /research/:id — individual paper
│
├── components/
│   ├── ui/                       # Reusable small components
│   │   ├── Nav.tsx               # Fixed navigation bar
│   │   ├── Footer.tsx            # Page footer
│   │   ├── ProjectCard.tsx       # Home page project card
│   │   └── ProjectCardFull.tsx   # /projects page card
│   └── sections/                 # Page section components
│       ├── Hero.tsx              # Full-screen hero
│       ├── About.tsx             # About + skills grid
│       ├── FeaturedProjects.tsx  # Home page project preview
│       ├── ResearchTeaser.tsx    # Home page research link card
│       ├── ResearchList.tsx      # ⭐ 3D perspective research list
│       └── Contact.tsx           # Contact links
│
└── lib/
    └── data.ts                   # ⭐ All content data (projects + papers)
```

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev
# → http://localhost:3000

# 3. Build for production
npm run build
npm start
```

---

## ✏️ How to Customize Content

### Add a new project
Open `lib/data.ts` and add an object to the `projects` array:

```ts
{
  id: "my-new-project",       // unique kebab-case id
  year: "2025",
  name: "My New Project",
  description: "What it does...",
  tags: ["React", "TypeScript"],
  githubUrl: "https://github.com/...",
  liveUrl: "https://...",       // optional
}
```

### Add a new research paper
Add an object to the `researchPapers` array in `lib/data.ts`.
The `id` becomes the URL: `/research/your-id-here`.

```ts
{
  id: "my-research-topic",
  title: "Full Paper Title",
  topic: "Topic Category",
  year: "2025",
  supervisor: "Prof. Benkarroum",
  abstract: "One paragraph abstract...",
  sections: [
    { heading: "Background", body: "..." },
    { heading: "Method",     body: "..." },
    { heading: "Results",    body: "..." },
  ],
  tags: ["Tag1", "Tag2"],
}
```

### Update contact links
Edit the `contactLinks` array in `components/sections/Contact.tsx`.

---

## 🎨 Design Tokens

All design variables live in `app/globals.css` as CSS custom properties:

```css
:root {
  --bg:      #080b10;   /* Main background */
  --surface: #0e1420;   /* Card background */
  --accent:  #00d4ff;   /* Cyan accent */
  --accent2: #7c3aed;   /* Purple accent */
  --muted:   #6b7a99;   /* Secondary text */
}
```

---

## 🌀 The 3D Research List — How It Works

The signature effect (`components/sections/ResearchList.tsx`):

1. `<ul>` is tilted with CSS 3D: `rotateY(-35deg) rotateX(5deg)` — "view from the side"
2. Mouse movement → live tilt adjustment (parallax)
3. Click → `classList.add('flat')` → CSS transition unfolds the list to `rotateY(0deg)`
4. Non-clicked items fade + slide out with opacity/transform
5. After 600ms → `router.push('/research/[id]')`

CSS for the effect is in `app/globals.css` under `/* Research list — 3D perspective scene */`.

---

## 🚀 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (one command)
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments on every push.

---

## 📦 Dependencies

| Package | Purpose |
|---|---|
| `next` | Framework + routing |
| `react` / `react-dom` | UI library |
| `framer-motion` | Animations on project cards, hero stagger |
| `tailwindcss` | Utility CSS classes |
| `typescript` | Type safety |
