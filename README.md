# deon's personal site

Personal website with a Bitburner-inspired pixel art aesthetic. Pure HTML/CSS/JS — no build step required.

## Customising

All site content lives in the `DATA` object at the top of `script.js`:

- `typewriterLines` — the rotating taglines in the hero
- `skills` — skill tags in the About section
- `projects` — project cards (title, desc, tags, github, live links)
- `blog` — blog entries (date, title, desc, tags, url)
- `contact` — contact links (label, icon, href)

Update `index.html` directly for the static About text and player stats.

---

## Deploying to GitHub Pages

1. Create a new GitHub repo named `<your-username>.github.io`
2. Push this folder to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```
3. Go to **Settings → Pages** in the repo, set source to `main` branch, root folder.
4. Your site will be live at `https://<your-username>.github.io` within a minute or two.

---

## Deploying to Cloudflare Pages

1. Push this folder to any GitHub repo (doesn't need to be named `*.github.io`).
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/) → **Create a project** → **Connect to Git**.
3. Select your repo.
4. Build settings:
   - **Build command**: *(leave empty)*
   - **Build output directory**: `/` (root)
5. Click **Save and Deploy**.

Your site will be live at `https://<project-name>.pages.dev` and automatically redeploys on every push.
