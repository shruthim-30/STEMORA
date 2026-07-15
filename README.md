# STEMORA — Project Description (for Resume)

## What I Built

I designed and developed a complete production website from scratch for **STEMORA**, a Bengaluru-based robotics and STEM education startup. The platform is their primary digital presence — showcasing programs, capturing leads, and automating business communications.

## Tech Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS v4, Wouter (routing), Lucide React (icons)
- **Backend:** Node.js, Express 4
- **API Layer:** tRPC v11 — end-to-end type-safe API between frontend and backend, no REST boilerplate
- **Database:** PostgreSQL with Drizzle ORM for schema management and type-safe queries
- **Email:** Nodemailer + Brevo SMTP API — automated email notifications on every form submission
- **Build Tool:** Vite
- **Testing:** Vitest
- **Package Manager:** pnpm

## What It Does

- 6 fully routed pages: Home, Courses, Internships, Robotics Expo, About, Contact
- Lead capture forms (Book Free Class, Book a Slot, Register Team) with validation, tRPC mutation, PostgreSQL persistence, and toast feedback
- Every form submission automatically triggers a real-time email to the business owner via Brevo SMTP API + Nodemailer, containing the user's name, email, phone, course interest, and message
- Fully responsive mobile-first UI with adaptive grids and proper touch targets
- Animated hero image slideshow with dot navigation
- Live-counting stat chips (Mentors, Schools, Internships, Exhibitions)
- Scroll reveal animations using a custom Reveal component
- Sticky glassmorphism header with scroll-aware shadow and animated mobile menu
- Infinite CSS marquee for partner/technology logos
- Consistent brand design system: Cyan #5CE1E6, Yellow #FFDE59, Navy #0A3D91

## Pages

- **Home** — Hero slideshow, Our Programs (5 cards), Core Offerings (6 cards), Internship CTA, Gallery, Testimonials, Partners marquee, CTA section
- **Courses** — 5 course cards (Young Innovators, Robotics Base, Robotics Circuit, Summer Camps, Exhibitions) with highlights and Book Free Class CTA
- **Internships** — Perks, experience checklist, program details card, intern showcase grid
- **Robotics Expo** — Event details, competition categories, event schedule timeline, eligibility, registration CTA
- **About** — Mission & Vision cards, Why Choose Stemora (4 cards), Meet Our Team (4 cards)
- **Contact** — Clickable contact info (email, phone, map), Book Free Class CTA card

## Email Flow

1. User submits a form on the website
2. Frontend sends data via tRPC mutation
3. Backend validates and saves to PostgreSQL via Drizzle ORM
4. Backend calls Nodemailer with Brevo SMTP credentials
5. Business owner receives a formatted email with all lead details
6. User sees a success toast and the form resets
