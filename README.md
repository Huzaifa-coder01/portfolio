# Portfolio

My personal portfolio site. Live at <https://portfolio-huzaifa-nadeem.vercel.app>

Built with React and Vite. Plain CSS, no UI library, no state management. React and
ReactDOM are the only runtime dependencies.

## Running it

Needs Node 18, or 20 and above (what Vite 5 supports).

```bash
npm install
npm run dev
```

Opens on http://localhost:5173.

| Script | What it does |
| --- | --- |
| `npm run dev` | dev server with hot reload |
| `npm run build` | production build into `dist/` |
| `npm run preview` | serve the built output locally |
| `npm run lint` | eslint |

## Using it for your own portfolio

Everything you'd want to change is in `src/data/portfolio.js`. Profile, jobs, projects,
skills, education and the nav links are all exported from there, and the components just
render whatever that file contains. You shouldn't need to edit any component to add a
job or a project.

A project entry looks like this:

```js
{
  name: 'Project name',
  subtitle: 'One line about it',
  role: 'Full-Stack Developer',
  org: 'Company or Personal',
  category: 'Full Stack',   // Full Stack | Frontend | Websites | Personal
  featured: true,           // optional, adds the Featured badge
  description: 'A sentence or two.',
  points: ['bullet', 'bullet'],
  stack: ['React', 'Node.js'],
  link: 'https://github.com/...'  // optional, shows a GitHub icon on the card
}
```

`category` drives the filter buttons on the projects section. If you add a new category,
add it to the `FILTERS` array in `src/components/Projects/Projects.jsx` too.

Colours, spacing and the border radius are CSS variables at the top of `src/index.css`.
Changing `--accent` and `--accent-2` recolours the whole site.

## Layout

```
src/
  data/portfolio.js      all site content
  hooks/useReveal.js     fade-in on scroll (IntersectionObserver)
  components/
    Icons.jsx            inline SVG icons
    Header/              sticky nav, mobile menu, scroll spy
    Hero/ About/ Experience/ Projects/ Skills/ Education/ Contact/ Footer/
  index.css              variables, resets, shared classes
  App.jsx
```

Each component keeps its CSS next to it. Shared classes (`.container`, `.section`,
`.card`, `.btn`, `.chip`, `.reveal`) live in `index.css`.

## Deploying

Import the repo at [vercel.com/new](https://vercel.com/new). Vercel picks up the Vite
preset on its own, and `vercel.json` handles the rest. After that every push to `main`
deploys automatically, and other branches get their own preview URLs.

`vercel.json` does two things worth knowing about:

- rewrites all paths to `index.html`, otherwise loading a URL like `/projects` directly
  would 404
- caches `/assets/*` for a year, which is safe because Vite puts a content hash in each
  filename

Update the `canonical` link in `index.html` if you deploy to a different domain.

## Contact form

The site is static, so there's no backend to post to. The form builds a `mailto:` link
and hands the message to the visitor's email client. It works without any setup, but it
does depend on them having a mail client configured.

If you want submissions to actually reach an inbox, replace `handleSubmit` in
`src/components/Contact/Contact.jsx` with a POST to Formspree, Web3Forms, or a Vercel
serverless function.

## Accessibility and browser support

Semantic sections with a skip link, visible focus outlines, aria labels on icon-only
buttons, and `prefers-reduced-motion` support that disables the scroll animations.
Layout uses grid and flexbox with no fallbacks, so it targets current browsers.
