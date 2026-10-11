# InternNova Homepage Redesign

A responsive React + Vite homepage concept for the InternNova internship and learning platform. This is an original redesign inspired by the information architecture of the public reference website, not a copy of its implementation.

## Features

- Responsive sticky navigation and mobile menu
- Hero section with clear calls to action
- Internship domain cards with category filtering
- About, learning journey, mentorship, workshops, impact metrics, testimonials, FAQ and footer
- Search/filter interactions, FAQ accordion, mobile menu and email capture demo
- Reduced-motion support and accessible labels
- React components, Lucide icons and plain CSS; no backend required

## Run locally

Requires Node.js 18+ (Node.js 20 LTS recommended).

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

Vite writes the production website to `dist/`.

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy, then open the generated URL and test desktop/mobile layouts.

## Deploy to Netlify

1. Import the GitHub repository in Netlify.
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Deploy and verify the generated URL.

## GitHub commands

From this project folder:

```bash
git init
git add .
git commit -m "Build InternNova homepage redesign"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/internnova-homepage-redesign.git
git push -u origin main
```

If your local folder is already connected to an existing repository, do not run `git init` or `git remote add` again. Use:

```bash
git status
git add .
git commit -m "Update InternNova homepage redesign"
git push
```

## Before submission

- Replace `YOUR_USERNAME` with your GitHub username when setting the remote.
- Run `npm run build` and resolve any errors.
- Check navigation, filters, FAQ accordion, and the application/newsletter form.
- The form currently demonstrates client-side interaction only; connect a real backend or form service before treating it as a production lead form.
- Confirm the internship domains, company claims, metrics, workshop dates, and contact information with InternNova before presenting this as official content.
- Add screenshots of desktop and mobile layouts to your submission.

## Content and trust note

This is an independent redesign concept. Metrics are labelled as sample design values in code where applicable and should be replaced with verified figures before public use. The application and newsletter forms do not submit data to a server.
