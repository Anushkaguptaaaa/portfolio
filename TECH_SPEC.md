# Personal Portfolio Website (Coquette Style)

## 🎯 Goal

Build a personal portfolio website for Anushka Gupta to showcase:
- About (bio, education, resume)
- Skills
- Projects
- Open-source contributions
- Contact links and form

**Style**: Elegant coquette aesthetic (soft, pastel, feminine) while staying clean and professional.
**Output**: Responsive, fast, SEO-friendly site deployed on Vercel.

## 🎨 Design & UI

**Theme**: Coquette (soft, dreamy, feminine)
**Colors**: Pastel pinks, blush rose, cream, lavender, subtle gold accents
**Typography**:
- Headings: Playfair Display or Fraunces (serif)
- Body: Poppins or Inter (sans-serif)

**Visual Style**:
- Rounded corners, soft shadows
- Gentle hover animations (Framer Motion)
- Decorative touches (bows, lace, sparkles)
- Clean white/pastel backgrounds
- Sticky navbar + smooth scroll

**Sections**:
- Hero: Intro, tagline, "View Resume" CTA
- About: Bio + education
- Skills: Grid of skill badges
- Projects: Cards with thumbnails, tech tags, GitHub/demo links
- Open Source: Contributions to Inkscape & Palisadoes Foundation
- Contact: Form + links (GitHub, LinkedIn, Email)
- Footer: © 2025 Anushka Gupta

## ⚙️ Tech Stack

**Frontend**
- Next.js (React framework)
- Tailwind CSS (styling)
- Framer Motion (animations)
- React Icons (icons)
- EmailJS (for contact form)

**Hosting**
- Vercel

**Version Control**
- GitHub

## 📂 Project Structure
```
/src
  /components
    Navbar.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    OpenSource.jsx
    Contact.jsx
    Footer.jsx
  /data
    projects.js
    skills.js
  /styles
    globals.css
/pages
  index.js
/public
  images (project screenshots, profile photo)
```

## 📑 Content Details

- **Hero**: Name, role (Full-Stack & App Developer), "View Resume" button
- **About**: Photo (optional), bio paragraph, education (DIT University, CS), resume link
- **Skills**:
  - JavaScript, React, Next.js, Node.js
  - MongoDB, PostgreSQL
  - Flutter
  - Stripe, Clerk, Postman, Cloudinary, Nodemailer
  - Bootstrap
- **Projects**:
  - Quick-AI (PERN SaaS, Gemini + ClipDrop APIs, Clerk, Stripe, Cloudinary)
  - QuickStay (MERN booking platform, Stripe, Nodemailer, Cloudinary)
  - Kahu (TypeScript app, Cat API, responsive gallery)
- **Open Source**: Contributions to Inkscape & The Palisadoes Foundation (PRs, documentation, collaboration)
- **Contact**: Form (EmailJS), LinkedIn, GitHub, Email

## ⚡ Features

- Mobile-first responsive design
- Smooth scroll & transitions
- Page load animations
- SEO metadata
- Lazy loading for images
- Fast builds (Vercel)

## 📌 Timeline
| Week | Task |
|------|------|
| 1    | Set up Next.js + Tailwind, basic layout |
| 2    | Hero, About, Skills |
| 3    | Projects, Open Source |
| 4    | Contact, animations, styling polish |
| 5    | Testing + deployment on Vercel |
