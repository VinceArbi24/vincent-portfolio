# Vincent Arbitrario — Portfolio

A premium, black-and-white manga/editorial style portfolio built with Next.js,
Tailwind CSS, and Framer Motion.

## 1. Run it locally

You need [Node.js](https://nodejs.org) 18 or newer installed.

```bash
npm install
npm run dev
```

Then open **http://localhost:3000** in your browser. The site auto-reloads
as you edit files.

## 2. Add your photos and videos

Nothing is hard-coded — you just drop files into `/public` and reference
them in `data/projects.js`.

```
public/
  images/
    profile/          ← your headshot goes here as profile.png
    graphic-design/
    thumbnails/
    advertisements/
    carousel/
  videos/
    podcast/
    real-estate/
    shorts/
    youtube/
```

Each folder has a small `README.md` reminding you what goes there.

**Profile photo:** save it as `public/images/profile/profile.png`. It will
appear automatically in the hero section.

**Before you save it**, double-check the file's real type in File
Explorer's "Type" column. A file can be *named* `something.jpg` while
its actual format is PNG (or the reverse) — browsers only care about the
real format, not the name, so a mismatch means it silently fails to
load. If your photo is a genuine JPEG, name it `profile.jpg` instead and
update the one `src` reference in `components/Hero.jsx` to match.

**Until you add a file**, the site shows a clean placeholder panel instead
of a broken image — so nothing looks broken while you're setting things up.

## 3. Add or edit a project

Open `data/projects.js`. Every project is one object in the `projects`
array. To add a new one, copy an existing object and change the fields:

```js
{
  id: "shorts-edit-03",              // must be unique
  title: "Shorts Edit 03",
  type: "video",                     // "video" or "image"
  categories: ["video", "social-media"], // used by the filter buttons
  tag: "Short-Form Video Editing",
  tools: ["CapCut"],
  description: "One or two sentences about the project.",
  src: "/videos/shorts/shorts-3.mp4",
}
```

No other file needs to change — the project will show up in the gallery
and respect the category filters automatically. Video previews autoplay
muted as soon as they scroll into view — no click or hover needed.

## 4. Contact info

Your real contact details are already filled in at `data/siteConfig.js`
and wired up at `data/contactLinks.js`:

- **Email:** vince.arbi@gmail.com — the "Contact Me on Gmail" button opens
  Gmail's compose window directly; a plain `mailto:` link is offered as a
  fallback underneath it.
- **WhatsApp:** +639 950378736 — opens `https://wa.me/639950378736` in a
  new tab, which works on both desktop and mobile.
- **LinkedIn:** links straight to your profile in a new tab.

If any of these details ever change, edit them in `data/siteConfig.js`
under `contact` — every button and footer link across the site pulls
from that one place.

Your bio, experience, and services text also live in `data/siteConfig.js`
— edit those plain text values directly whenever you want to update them.

### Adding client testimonials

The "What Clients Say" section shows a clean "coming soon" placeholder
until you have real feedback to add. Once you do, add it to the
`testimonials` array in `data/siteConfig.js`:

```js
testimonials: [
  {
    quote: "Exact words a real client said about your work.",
    author: "Their name",
    context: "Where you worked together (optional)",
  },
],
```

Only add real quotes from real clients — this section is designed to stay
empty and honest until you have them.

## 5. Deploy to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Leave all settings as default (Vercel auto-detects Next.js) and click
   **Deploy**.
4. Every time you push to the `main` branch, Vercel redeploys automatically.

If your videos are large, consider hosting them on a service like
Mux, Cloudflare Stream, or YouTube (unlisted) and pointing `src` at that
URL instead, since large video files can slow down a git-based deploy.

## Project structure

```
app/            → Next.js pages, layout, global styles
components/     → All UI sections (Hero, Work, Contact, etc.)
data/           → siteConfig.js (text/contact) and projects.js (portfolio items)
public/         → your images and videos
```

## Notes

- Colors, type, and spacing tokens live in `tailwind.config.js` if you
  ever want to adjust the palette or fonts.
- Animations respect `prefers-reduced-motion` for visitors who have that
  system setting enabled.
