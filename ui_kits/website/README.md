# Website UI Kit — boutiquecapitalpartners.co.uk

Interactive recreation of the BCP homepage, built from the saved site source (`site_src/index.html`) rather than screenshots.

- `index.html` — the full page; composes the design-system components (`NavBar`, `Button`, `InsightCard`, `ContactCard`, `TeamCard`, `Footer`, …) from `_ds_bundle.js`.
- `HomeHero.jsx` — wave-photo hero + floating Viewpoint callout; cream intro with swirl watermark and coral callout box.
- `HomePartnership.jsx` — navy River Road announcement (corner brackets, Georgia fund name), values photo strip with popups, teal puffin/CSR section with accordion.
- `HomeServices.jsx` — interactive "What do we offer?" — navy numbered menu (01–08, brand icons) + content panel; all copy is the site's real `servicesData`.
- `HomeTeam.jsx` — founder spotlight, coral-bordered advisory board grid, bio modals.
- `HomeInsights.jsx` — insights grid (InsightCard), view-all panel, navy contact section.

Interactions: services menu switching (fadeInUp), team/values modals, puffin accordion, all hover lifts.

Not captured in the source zip (and therefore omitted, not invented): River Road fund detail pages, document centre, article pages, fund stats counters, video player.
