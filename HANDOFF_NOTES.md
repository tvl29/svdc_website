# SVDC Website — Handoff Notes

## 1. Design rationale

**Concept:** boutique dental-spa. The brief called for calm restraint over
loud dental-template energy, so the palette leans ~70% neutral (off-white
`#FCFBF7` + sage `#F0F7E6`), ~25% ink/olive, and the brighter limes
(`#7AB800` / `#8FBF2A`) are used only as small accents — a star rating, a
hover state, the field-motif strokes. The one deep, saturated moment is the
`#2F4A0E` band used for the CTA section and footer, giving the page a single
grounding dark note instead of scattering color everywhere.

**Type:** Fraunces (display serif) for headlines pairs with Manrope (body
sans) — warm and editorial without tipping into "wedding invitation."
Headline sizes are large and confident (up to `text-6xl` in the hero) with
tight tracking, per the spec.

**Signature element:** the swaying field/grove motif (`FieldMotif.tsx`) — a
small SVG of animated vertical strokes referencing the logo's grove mark and
Monterey County farmland. It appears sparingly: as ambient detail on the
location cards and as a divider on the new-office page. It respects
`prefers-reduced-motion` and stops swaying when that's set.

**Hero — confirmed video-based per your instruction:** the hero is now a
full-bleed video background (not the illustrated "save-the-date" card from
the original spec), with a poster fallback, a dark gradient overlay for text
contrast, and a static poster-image fallback whenever
`prefers-reduced-motion: reduce` is set. Copy still runs the same load-in
sequence (pill → headline → subhead → CTAs → trust line).

**Motion:** one orchestrated hero load-in sequence, the ambient field-sway,
and a shimmer sweep on the announcement pill — kept to those three moments
so nothing feels scattered. All motion respects reduced-motion.

## 2. Placeholder assets to prepare

Drop these into `/public/assets/` using the exact filenames below (or update
the paths in `src/data/assets.ts` if you name them differently):

| Purpose | Path | Notes |
|---|---|---|
| Hero video (mp4) | `assets/hero-video.mp4` | Full-bleed, autoplay/muted/loop |
| Hero video (webm, optional) | `assets/hero-video.webm` | Better compression fallback |
| Hero poster frame | `assets/hero-poster.jpg` | Shown before load, on failure, and for reduced-motion users |
| John Street reception | `assets/john-street-reception.jpg` | Used on `/new-office` gallery |
| John Street treatment room | `assets/john-street-treatment-room.jpg` | Used on `/new-office` gallery |
| Main Street exterior | `assets/main-street-exterior.jpg` | Used on `/new-office` gallery |
| Team group photo | `assets/team-group-photo.jpg` | Reserved for the About page (not yet built) |
| Office wide shot | `assets/office-wide-shot.jpg` | Reserved for gallery/About use |

## 3. Things that need confirmation before launch

- **Phone number** — three different numbers have shown up across sources
  (old site header/hero/footer: `831-784-8771`; old site Contact page/
  directories: `831-424-1535`; the postcard: `831-272-7921`). The site
  currently uses the postcard number (`831-272-7921`) as a placeholder in
  `src/data/content.ts` — **please confirm the one correct number** before
  this goes live, since it's the single source of truth used everywhere
  (header, hero, footer, both CTA bands).
- **John Street ZIP code** — not present in any reference doc; currently
  shown as `[ZIP]` in `src/data/content.ts`.
- **Featured review** — `featuredReview` in `content.ts` is a clearly
  labeled placeholder. Per the compliance guardrails, don't fabricate a
  testimonial — swap in a real, permissioned Google review before launch.

## 4. Notes on remaining pages (not yet built)

To extend the system consistently:

- **About** — reuse `Header`/`Footer`/`CTABand`. Build a team section using
  `dentists` from `content.ts` and `teamAssets.groupPhoto`; keep the
  StoryBrand framing (patient as hero, practice as guide) rather than a
  resume-style bio dump.
- **Services** — the homepage `Services` section is a summary; a full
  Services page can expand each card into its own section (Preventive,
  Cosmetic, Restorative, Emergency) with the same card styling, plus an
  emergency-specific CTA per the audit doc ("Call Now — Same-Day
  Emergencies").
- **Reviews** — expand the homepage `Trust` section into a full grid of
  permissioned reviews, same star/quote pattern.
- **Contact** — combine both location cards from `TwoLocations` with a
  contact form (no native `<form>` tag needed if it later becomes a React
  artifact; here it's a static site, so a standard `<form>` posting to
  Formspree — matching the pattern already used on the SBWAC project — is
  the natural fit).

All new pages should pull from `src/data/content.ts` rather than
hardcoding NAP details, so the phone/address stay correct everywhere once
confirmed.

## 5. Tech notes

- Stack: React + TypeScript + Tailwind CSS v4 (via `@tailwindcss/vite`) + Vite + React Router.
- `vite.config.ts` uses a conditional `base` path (`/` in dev, `/SVDC/` in
  build) — same pattern as your other GitHub Pages projects. Update
  `/SVDC/` to match whatever the final repo name is.
- Single content source: `src/data/content.ts` — please don't let a second
  copy of this drift into existence (this bit N-Care before).
- `npm run build` and `tsc --noEmit` both pass clean as of this handoff.
