# VIBE\*BITE

Retro-inspirerad restaurangsida för **VIBE\*BITE** — en svensk restaurang med 70-talsestetik, smashburgare, neapolitansk pizza och craft cocktails.

Byggd med **Next.js** och **Tailwind CSS**. 

---

## Sidor

| Sida | Route | Beskrivning |
|------|-------|-------------|
| Landningssida | `/` | Hero, kockens favoriter, vibe-sektion och Instagram-grid |
| Meny | `/meny` | Komplett meny med burgare, pizza, drinkar och smått & gott |

---

## Stack

- [Next.js 15](https://nextjs.org) — App Router
- [Tailwind CSS](https://tailwindcss.com) — utility-klasser
- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) — brödtext
- [Syne](https://fonts.google.com/specimen/Syne) — rubriker
- [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) — accenttext & priser
- [Vercel Analytics](https://vercel.com/analytics)

---

## Kom igång

```bash
npm install
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000) i webbläsaren.

---

## SEO

- `lang="sv"` på `<html>`
- Per-sida metadata med OpenGraph och Twitter Card
- Restaurant JSON-LD schema på landningssidan
- Menu JSON-LD schema på menysidan
- Canonical URLs på båda sidor
