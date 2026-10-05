# Dr. Maya Reynolds — Therapy Website

A responsive therapy practice website designed for **Dr. Maya Reynolds, PsyD**, based in Santa Monica, California.

This project was created as part of the **Grow My Therapy Front-End Developer Internship practical assignment**. The website combines the structure of the provided counseling website with a new visual identity, content direction, and a custom **Our Office** section based on the provided therapist profile.

## Live Demo

**Live Website:** `Coming soon — Vercel deployment`

**GitHub Repository:**
https://github.com/Pappu940/maya-reynolds-therapy

---

## Project Overview

The goal of this project was to create a professional, welcoming, and responsive therapy website that is easy for potential clients to navigate.

The website was designed around Dr. Maya Reynolds' practice in **Santa Monica, CA**, with a focus on:

* Anxiety and panic
* Trauma therapy
* Burnout and perfectionism
* CBT
* EMDR
* Mindfulness
* Body-oriented approaches
* In-person therapy in Santa Monica
* Online therapy throughout California

The design uses a calm and warm visual style to create a comfortable experience for visitors who may be looking for therapy.

---

## Key Features

### Responsive Design

The website is designed to work across:

* Desktop
* Tablet
* Mobile

The navigation, images, content sections, buttons, FAQs, and layouts adjust for smaller screens.

### Therapy Services

The website includes dedicated sections for:

* Anxiety & Panic
* Trauma & EMDR
* Burnout & Perfectionism

### Therapeutic Approaches

The website presents the main approaches included in the therapist profile:

* Cognitive Behavioral Therapy (CBT)
* EMDR
* Mindfulness
* Body-Oriented Work

### About Section

Introduces Dr. Maya Reynolds and her collaborative approach to working with adults.

### Our Office — Custom Section

A new section created specifically for the assignment.

It includes:

* Office imagery
* Santa Monica location
* In-person therapy information
* California telehealth information

### FAQ Section

Answers common questions related to:

* Online sessions
* In-person sessions
* Therapy approaches
* Getting started

### Contact Section

Includes a simple front-end contact form to provide visitors with a clear way to begin an inquiry.

> Note: The contact form is currently a front-end demonstration and is not connected to a production email or booking service.

---

## Design Approach

The design was created to feel:

* Calm
* Professional
* Warm
* Trustworthy
* Easy to navigate

The color palette uses deep slate blue, soft neutral backgrounds, and warm brick-inspired accents.

The layout focuses on:

* Clear visual hierarchy
* Comfortable spacing
* Readable typography
* Strong but simple calls to action
* Consistent imagery
* Mobile-friendly interactions

---

## Tech Stack

* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **CSS**
* **App Router**
* **@fontsource**

---

## Project Structure

```text
maya-reynolds/
│
├── public/
│   └── images/
│       ├── hero-office-light.webp
│       ├── hero-office-side.webp
│       ├── welcome-office-table.webp
│       ├── welcome-office-shelf.webp
│       ├── anxiety-office-art.webp
│       ├── trauma-office-chair.webp
│       ├── burnout-office-rest.webp
│       ├── pacific-dusk.webp
│       ├── office-1.webp
│       ├── office-2.webp
│       ├── office-detail.webp
│       └── maya-reynolds.webp
│
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   │
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Accordion.tsx
│   │   ├── Contact.tsx
│   │   ├── Expertise.tsx
│   │   ├── FAQ.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Logo.tsx
│   │   ├── Methods.tsx
│   │   ├── Office.tsx
│   │   ├── QuoteBand.tsx
│   │   ├── Services.tsx
│   │   └── Welcome.tsx
│   │
│   └── lib/
│       └── content.ts
│
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

---

## Getting Started

### Prerequisites

Make sure you have installed:

* Node.js
* npm
* Git

### Installation

Clone the repository:

```bash
git clone https://github.com/Pappu940/maya-reynolds-therapy.git
```

Move into the project directory:

```bash
cd maya-reynolds-therapy
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the website in your browser:

```text
http://localhost:3000
```

---

## Production Build

To create a production build:

```bash
npm run build
```

To run the production build locally:

```bash
npm start
```

---

## Deployment

The project is ready to be deployed using **Vercel**.

The deployment process requires connecting the GitHub repository to Vercel and deploying the Next.js application.

No additional configuration is required for the basic deployment.

---

## SEO

The project includes basic SEO-related setup through:

* Page metadata
* Semantic headings
* Localized content for Santa Monica, CA
* `robots.ts`
* `sitemap.ts`
* Open Graph image

The main page content naturally includes relevant local search terms such as:

* Therapy in Santa Monica
* Anxiety therapy
* Trauma therapy
* EMDR
* Burnout therapy
* Perfectionism therapy

---

## Future Improvements

For a production-ready version, the following could be added:

* Connect the contact form to a secure form service or booking system
* Add the client's final phone number and email
* Add a real appointment scheduling system
* Connect analytics
* Add additional accessibility testing
* Add final production domain and canonical URL

---

## Assignment Focus

This project demonstrates:

* Front-end development
* Responsive web design
* Component-based React development
* Next.js App Router
* TypeScript
* Tailwind CSS
* UI/UX implementation
* Local SEO considerations
* Reusable components
* Mobile responsiveness
* Translating a client profile into website content
* Creating a custom website section from client requirements

---

## Author

**Pappu Singh**

B.Tech IT Graduate

GitHub:
https://github.com/Pappu940
