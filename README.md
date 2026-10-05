# Dr. Maya Reynolds, PsyD — Therapy Website (Santa Monica, CA)

Next.js (App Router) + Tailwind CSS. Clone-and-redesign of a counseling homepage, rebuilt from Dr. Reynolds' profile.

## Run locally
```bash
npm install
npm run dev     # http://localhost:3000
```

## Where things live
- `src/app/globals.css` — theme tokens (primary / secondary / accent) and shared type styles
- `src/lib/content.ts` — ALL copy, derived only from the profile
- `src/components/*` — one component per section (Hero, Welcome, Services, QuoteBand, Expertise, Methods, **Office** (new), About, FAQ, Contact, Footer)
- `public/images/*` — Dr. Reynolds' portrait + office photos (from the profile), re-cut at full resolution and colour-graded, plus a generated sunset image
- Fonts are bundled via `@fontsource` (no external font requests)

## Deploy (Vercel)
Push to a public GitHub repo, then import it at vercel.com/new — no config needed.

## Optional
Set `NEXT_PUBLIC_SITE_URL` (Vercel → Settings → Environment Variables) to your final domain for correct canonical/sitemap URLs.

## Before launch
- Contact form is a front-end demo; connect it to Formspree / Resend / the booking tool.
- Add phone/email once the client provides them.

## Image slots (swap guide)
Replace a file in `public/images/` (keep the name, or update the path in `src/lib/content.ts` / the component).

| File | Where it appears | Ideal shape |
|---|---|---|
| `hero-office-light.webp` | Hero, large image | portrait, ~3:4 |
| `hero-office-side.webp` | Hero, small edge image | tall & narrow |
| `welcome-office-table.webp`, `welcome-office-shelf.webp` | Welcome section | portrait, 4:5 |
| `anxiety-office-art.webp`, `trauma-office-chair.webp`, `burnout-office-rest.webp` | Three services | landscape, 4:3 |
| `pacific-dusk.webp` | Quote band | wide landscape |
| `office-1.webp`, `office-2.webp`, `office-detail.webp` | "Our Office" gallery | landscape |
| `maya-reynolds.webp` | About section portrait | portrait, 2:3 |
