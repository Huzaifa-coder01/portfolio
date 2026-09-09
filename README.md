# Huzaifa Nadeem — Portfolio

Personal portfolio site for **Huzaifa Nadeem**, Associate Software Engineer & MERN Stack Developer.

Built with **React 18 + Vite**, plain CSS (no UI framework), and zero runtime dependencies beyond React.

## Sections

Home · About · Experience · Projects (filterable) · Skills · Education · Contact

## Editing content

All content lives in a single file — **[`src/data/portfolio.js`](src/data/portfolio.js)**.
Update your profile, jobs, projects, skills, and education there; the components render
whatever is in that file. No component edits needed to add a project or a job.

```js
// add a project
{
  name: 'My New Project',
  subtitle: 'What it is',
  role: 'Full-Stack Developer',
  org: 'Company',
  category: 'Full Stack',      // Full Stack | Frontend | Websites | Personal
  featured: true,              // optional — adds the "Featured" badge
  description: '...',
  points: ['...'],
  stack: ['React', 'Node.js'],
  link: 'https://github.com/...' // optional — shows a GitHub icon
}
```

Theme colors are CSS variables at the top of [`src/index.css`](src/index.css).

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
npm run lint
```

## Deploying to Vercel

The repo already includes [`vercel.json`](vercel.json) with the Vite framework preset,
SPA rewrites, and long-lived caching for hashed assets.

**Option A — Dashboard (recommended)**

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Vite — Build Command `npm run build`, Output Directory `dist`.
4. Click **Deploy**. Every push to `main` redeploys automatically.

**Option B — CLI**

```bash
npm i -g vercel
vercel        # preview deployment
vercel --prod # production deployment
```

After the first deploy, update the `canonical` URL in [`index.html`](index.html) to your
real domain.

## Contact form

The site is fully static, so the contact form opens the visitor's mail client with the
message pre-filled (`mailto:`). To collect submissions server-side instead, swap the
`handleSubmit` in [`src/components/Contact/Contact.jsx`](src/components/Contact/Contact.jsx)
for a POST to a form service (Formspree, Web3Forms) or a Vercel serverless function.
