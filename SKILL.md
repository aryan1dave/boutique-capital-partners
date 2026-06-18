---
name: boutique-capital-partners-design
description: Use this skill to generate well-branded interfaces and assets for Boutique Capital Partners (BCP), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

Key facts: BCP is a UK asset-management distribution firm. Brand = navy #00005C + coral #DE5D5D + cream #F7EFD9 (+ teal #257A99), Montserrat everywhere (Georgia as serif accent), sentence-case "We…" copy, no emoji, mandatory FCA compliance footer text. Tokens live in `styles.css` → `tokens/*.css`; real logos/icons/photos in `assets/`; React components in `components/`; a full homepage recreation in `ui_kits/website/`.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
