# tchemaly.github.io

Personal academic website for Trishia El Chemaly — PhD Candidate, Stanford University.

## Structure

```
.
├── index.html       Home — about, position, links
├── research.html    Selected & full publications
├── styles.css       Shared design system (colors, type, layout)
├── images/          Site images (portrait, etc.)
└── README.md
```

All pages share the same nav, fonts (Newsreader / Inter / IBM Plex Mono), and design
tokens defined at the top of `styles.css`.

## Local preview

No build step — it's static HTML/CSS. Either open `index.html` directly in a browser,
or serve it locally so relative paths behave exactly as they will in production:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Deployment

Hosted on GitHub Pages from the `main` branch of this repo (`tchemaly.github.io`),
which serves it at `https://tchemaly.github.io`. Any push to `main` redeploys the
site automatically — no CI config needed for a plain static site like this.

## To do

- Add `images/portrait.jpg` (headshot referenced on the Home page)
- Add a thesis line and About copy once finalized — current text is a placeholder draft
