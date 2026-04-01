# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website — a zero-dependency static SPA with a retro Bitburner-inspired pixel art / cyberpunk aesthetic.

## Serving Locally

No build step required. Serve directly with any static file server, for example:

```bash
npx serve .
# or
python -m http.server 8080
```

## Deployment

- **GitHub Pages**: Push to a `.github.io` repo on the `main` branch. No build command needed.
- **Cloudflare Pages**: Connect repo, leave build command empty, set output directory to `/`.

## Architecture

Three files do all the work:

| File | Purpose |
|---|---|
| `index.html` | Semantic markup; single page with nav, hero, about, projects, blog, contact, footer |
| `style.css` | ~591 lines; CSS variables for theming, component styles, animations, responsive breakpoint at 700px |
| `script.js` | ~283 lines; all content lives in the `DATA` object at the top; functions below render each section |

### Content Editing

All site content (skills, projects, blog posts, contact links) is centralized in the `DATA` object at the top of `script.js` (lines 5–64). Edit that object to update content — no HTML changes needed for most updates.

### Key JavaScript Components

- `drawAvatar()` — renders the 16×16 pixel art sprite onto the `<canvas>` element
- `typewriter()` — rotating animated subtitle in the hero
- `renderSkills/Projects/Blog/Contact()` — DOM builders for each section
- `initScrollAnimations()` — IntersectionObserver fade-in on scroll
- `initNav()` — mobile hamburger menu + scroll-aware nav styling

### CSS Theming

The accent color (`--accent: #00ff41`) and all design tokens are CSS variables defined at the top of `style.css`. Change the palette there to retheme the whole site.
