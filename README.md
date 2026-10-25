# PeeFee Cleaning Services — Multi-page React Website

A cleaner, more structured, immersive multi-page website concept built with React, Vite, Tailwind CSS, React Router, GSAP and ScrollTrigger.

## Routes

- `/` — Homepage
- `/services` — Services directory
- `/services/:slug` — Individual service detail pages
- `/about` — About PeeFee
- `/our-work` — Work and visual portfolio
- `/contact` — Contact details and WhatsApp quote request

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Before launch

- Confirm the business phone number and WhatsApp number in `src/App.jsx`.
- Confirm the contact email and service location.
- Replace illustrative stock photos in `src/App.jsx` with PeeFee's real project photos where available.
- Update social profile links in the footer.
- Configure SPA fallback/rewrite rules on your hosting provider so direct visits to routes such as `/services` and `/about` serve `index.html`.

The contact form opens WhatsApp with the customer's message prefilled. It does not save enquiries to a database.
