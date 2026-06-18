# Boutique Capital Partners — Design System

**Boutique Capital Partners (BCP)** is a London-based professional asset management firm offering *"outsourced distribution for outstanding investment strategies."* BCP partners with and raises capital for boutique fund managers, providing fully outsourced distribution into the UK, Channel Islands, Irish and Swiss intermediary markets.

- **Website:** https://boutiquecapitalpartners.co.uk/ (WordPress + Elementor; the homepage is largely hand-written HTML/CSS blocks)
- **Source provided:** `uploads/saveweb2zip-com-boutiquecapitalpartners-co-uk.zip` — a full save of the live homepage. Extracted to `site_src/` (index.html, css, fonts, images) for reference.
- **Key partner brands that appear on-site:** River Road Asset Management (foundational distribution partner, US Large Cap Value Select fund), Cornerstone (marketing partner), Scottish Seabird Centre (CSR — BCP sponsors the Atlantic Puffin).
- **Audience:** strictly professional/institutional investors and advisers (the footer disclaims retail use). Tone and density reflect that.

**One product/surface:** the marketing website. There is no app. Sub-surfaces: homepage (hero, services, team, values, puffin/CSR, insights, contact), River Road fund pages, insights/article pages.

---

## CONTENT FUNDAMENTALS

**Voice:** confident, warm-professional, first-person plural. BCP always speaks as "We" — "We partner with…", "We collaborate with…", "We'd love to hear from you." Fund managers and fund buyers are addressed indirectly (third person) rather than "you".

**Copy style:**
- Sentence case for headings ("What do we offer?", "Who we are", "Our values: a framework for success"). Title Case only for proper nouns and article titles ("The Russell Shuffle: When growth meets value").
- ALL-CAPS reserved for short announcement banners ("NOW AVAILABLE AS A UK OEIC…") and tiny eyebrow labels ("KEY FEATURES", "SERVICE 01", "PHONE").
- Questions as section titles are a recurring device ("What do we offer?", "Best-in-class fund manager? Let's have a conversation").
- Emphasis *inside* sentences via italic + bold Montserrat: the hero is "*Outsourced* distribution for **outstanding** investment strategies".
- Superlative-but-grounded vocabulary: "best-in-class", "exceptional", "differentiated", "proven track records", "highly experienced", "alpha-delivering skills". Claims are always anchored to discipline and experience, not hype.
- Values are stated as single adjectives ("Commercial", "Innovative", "Friendly") with two short supporting sentences. Note the brand allows itself warmth: "We are collaborative and empathetic. And fun."
- **No emoji, anywhere.** No exclamation marks except the rare CSR note.
- Compliance language is mandatory furniture: "Capital is at risk. Past performance does not predict future returns…", FCA registration in the footer, "exclusively for experienced professional/institutional investors and advisers."
- UK English ("authorised", "recognise"). Phone formatted "+44 (0)20 4619 3222".
- CTAs are short verb phrases: "Partner with us", "Discuss with us", "Read article", "View All Insights", "Get In Touch".

---

## VISUAL FOUNDATIONS

**Color system** — three-color brand: deep navy `#00005C`, coral `#DE5D5D`, warm cream `#F7EFD9`; teal `#257A99` as the secondary (logo swirl + CSR section). Pages alternate full-bleed section backgrounds: cream → navy → cream → teal → navy. White is used only for cards floating on cream. Coral is *strictly* an accent: CTAs, links, active states, bullets, 5px accent bars — never a background for whole sections (only the small callout box).

**Type** — Montserrat for essentially everything (400/500/600/700; variable font shipped in `assets/fonts/`). Hero h1 ~58px weight 400 with *italic* and **700** spans inline; section h2 42–50px weight 600, letterspacing -0.5px; panel h3 32px/600; card titles 22px/600; body 15–17px, line-height 1.6–1.75. Eyebrows 11–13px, 600–700, uppercase, +1 to +1.5px tracking. Georgia (serif) appears as an accent for fund names ("US Large Cap Value Select") and intro prose on navy. Roboto / Roboto Slab are Elementor theme defaults that barely surface — don't design with them.

**Backgrounds & imagery** — full-bleed photography for hero moments: a cresting ocean wave (homepage hero), a mountain valley (values strip). Nature/seabird photography (puffins) carries the CSR story. Color vibe: cool blue-greens with warm golden light — never desaturated, never b&w. The teal logo swirl (`assets/marks/swirl-teal.svg`) is used enormous and at ~15% opacity as a watermark behind content on cream sections. No gradients except the tiny coral accent bar (`90deg, #DE5C5C → #E88A8A`); no patterns or textures.

**Cards** — white (or cream `#F8F4ED` when floating on photos/navy), radius 12–16px (up to 20px for big CTA panels), soft navy-tinted shadow `0 4px 20px rgba(0,0,92,0.08)`, hairline border `rgba(0,0,92,0.06)`. On navy, "cards" are instead 2px coral-bordered boxes (radius 16px) or `rgba(255,255,255,0.08)` fills — no shadows on dark.

**Buttons** —
- Primary: solid coral, white text, radius 6–12px, weight 600; hover darkens to `#C54D4D`, lifts -2px, coral glow shadow.
- Outline (on navy): transparent, 1.5px coral border, white text, radius 6px; hover fills coral.
- Cream (on teal/photo cards): `#F8F4ED` fill, coral text; hover turns white.
- Tertiary (inside cream cards): `#E8E4DC` fill, navy text; hover inverts to navy/white.
- Text-CTA: coral 15px/600 with → arrow that slides +3–4px on hover.

**Hover/press states** — everything lifts: buttons translateY(-1 to -2px), cards -3 to -8px with deeper shadow; images inside cards scale 1.05; arrows slide right; coral text-links lighten to `#F07070`. Transitions `0.25–0.35s ease` or `cubic-bezier(0.4,0,0.2,1)`. Entrance: fadeInUp (8px, 0.35s). No bounces (except one decorative Elementor arrow), no parallax.

**Borders & dividers** — coral left-border (3px) marks active menu items; 5px coral gradient accent bar tops the hero callout; 2px coral border boxes on navy; 1px sand `#C9C4BC` vertical dividers between meta items; 5px cream bottom-border under the photo strip. Corner-bracket borders ("corner-borders") frame the River Road announcement.

**Transparency & blur** — white-alpha text hierarchy on dark (1 / 0.85 / 0.5 / 0.4); `rgba(255,255,255,0.08)` hover fills on navy; modal overlay `rgba(0,0,92,0.9)`. No backdrop blur anywhere.

**Layout** — boxed content: 1400px custom sections / 1240px Elementor / 1100px team. Section padding 80–100px vertical, 60px horizontal. Sticky left menu pattern in the services section (navy sidebar, numbered 01–08 items with white line icons). Modals: white, radius 16px, sticky navy header. Footer: navy, cream logo, tiny compliance text, large instagram/LinkedIn circle icons.

---

## ICONOGRAPHY

- **Service icons:** the brand's own set — 8 white line-art SVGs (`assets/icons/service-*.svg`, originally `box_1.svg`…`box_8.svg`). They render white via `filter: brightness(0) invert(1)` on navy, and sit inside 64px coral squares (radius 12px) in content headers. **Use these first** for service/feature iconography.
- **UI glyphs:** small inline SVGs drawn ad hoc — a 24px stroke arrow (`M5 12h14M12 5l7 7-7 7`, stroke-width 2, round caps) for CTAs, chevrons for accordions, Material-style filled phone/email glyphs in contact cards. `assets/icons/arrow-left/right.svg` are tiny slider arrows.
- **Icon fonts available on the original site:** Font Awesome 5 (solid/regular/brands) and ElementsKit — used by Elementor widgets (plus icon, download arrow, social). For new work prefer the inline-SVG approach; if a generic icon is unavoidable, match a 2px-stroke round-cap style (e.g. Lucide via CDN) and flag it.
- **Social icons:** large (47px) brand SVGs in circles in the footer (Instagram outline style, LinkedIn solid blue square).
- **No emoji. No unicode-char icons.** Numbers ("01"–"08") act as iconographic labels in menus.

---

## INDEX

| Path | What it is |
|---|---|
| `styles.css` | Global CSS entry — imports all tokens + fonts |
| `tokens/colors.css` | Color tokens (base + semantic) |
| `tokens/typography.css` | Type families, scale, weights, tracking |
| `tokens/spacing.css` | Layout, spacing, radii, shadows, motion |
| `tokens/fonts.css` | @font-face (Montserrat variable, Roboto, Roboto Slab) |
| `tokens/base.css` | Minimal `body.bcp` base styles |
| `assets/logos/` | BCP logo (navy/teal on light: `bcp-logo.webp`; cream-on-navy: `bcp-logo-cream.png`), swirl favicon, River Road, Cornerstone, Seabird Centre logos |
| `assets/marks/` | The swirl logo mark, teal + coral, for watermarks |
| `assets/icons/` | 8 brand service icons + slider arrows |
| `assets/images/` | Wave hero banner, mountain view, puffin photography |
| `assets/fonts/` | woff2 binaries |
| `guidelines/` | Foundation specimen cards (Design System tab) |
| `components/core/` | Button, Tag, SectionHeading, CalloutBox, FeatureList |
| `components/cards/` | InsightCard, ContactCard, TeamCard |
| `components/navigation/` | NavBar, Footer |
| `ui_kits/website/` | Full homepage recreation (interactive) |
| `SKILL.md` | Agent-skill entrypoint |

**Components** (compiled to `window.<Namespace>` via `_ds_bundle.js`): `Button`, `Tag`, `SectionHeading`, `CalloutBox`, `FeatureList`, `InsightCard`, `ContactCard`, `TeamCard`, `NavBar`, `Footer`.

**Caveats:** the zip contained only the homepage — River Road fund pages, document centre and article pages were not captured, so their layouts are not represented. The hero background (`hero-wave.jpg`) referenced a remote URL; `assets/images/wave-banner.webp` is the same wave artwork from the same page. Fonts are the original Google-served woff2 binaries (latin subset).
