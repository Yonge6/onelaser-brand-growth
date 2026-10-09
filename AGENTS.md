# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

## Project Decisions

- Selected visual target: `docs/selected-design.png` (international cinematic direction, option 2).
- Keep the public experience English-first and portfolio-led, not ecommerce-led.
- Use real OneLaser project assets; incomplete work should be labeled as coming soon.
- Never use discount, savings, low-price, or comparison framing for Premier products.
- Public custom domain target: `onelaser.wonderelian.com`.
- The brochure reader should feel like a physical magazine: desktop turns the right-hand sheet from right to left with a visible 3D page, while the reader minimizes outer whitespace so the publication fills the viewport.
- Magazine motion should feel soft and paper-like rather than like a rigid panel: use eased lift and landing, a gradual front/back handoff, subtle flex, and continuous edge lighting.
- Magazine navigation must never flash an unloaded white surface: preload and decode the destination spread before motion starts, and keep page/sheet fallback surfaces dark.
- During a magazine turn, keep the binding edge pinned to the center spine, place the moving paper highlight on the free edge, and soften the static spine shadow until the page lands.
- Keep the WonderElian drawer-card introduction aligned with the current About copy on `wonderelian.com`, including both Chinese and English positioning.
- Keep the Buer Within drawer card linked to `https://buer.wonderelian.com/` and aligned with its current AI growth companion positioning; do not reuse the legacy Human Design-only name, URL, or description.
- Place `三慢问道` / `Wendao` immediately after Buer Within in the drawer works list, linked to `https://wendao.wonderelian.com/` and described as a slow Tao Te Ching reading and reflection experience.
- Position this case study as `Brand & Growth Design` / `品牌与增长设计`; do not label it as a brand-and-growth system.
- Make `Brand & Growth Design` / `品牌与增长设计` the hero headline itself. Use `OneLaser / Integrated Case Study` / `OneLaser / 综合案例` as the eyebrow and describe the outcome as moving from product truth to brand and market growth; credit Elian for strategy, creative direction, and design.
- The fourth product-series brochure is XRF Gen2, using the supplied 10-page English PDF and its rendered pages; it replaces the previous X Series volume across the card, reader, and download.
- Keep `maker.wonderelian.com` accessible through its homepage project card and project index entry, presenting its real Maker Business Lab positioning rather than a generic promotion; do not show a dedicated Maker Business Lab button in the fixed top navigation.
- Use newly generated, text-free editorial imagery for all four chapter thumbnails; do not reuse campaign art, brochure covers, or screenshots in those slots.
- Showcase `https://yonge6.github.io/onelaser-homepage-v3/` on the portfolio alongside the XRF Gen2 listing and Maker Business Lab; treat these as the first three entries in a scalable live-web-project collection that can grow without restructuring the site.
- Use the latest successful `Yonge6/xrf-gen2-listing` `main` commit as the source version for the synchronized same-origin fallback mirror; the current version is `a586abd`.
- Match Maker Business Lab's bilingual typography system across the portfolio: Barlow Condensed for display, navigation, labels, and Latin text; Noto Sans SC for body copy and Chinese glyph fallback. Do not use the former Noto Serif SC Chinese display treatment.
- Maintain a public-facing readability floor across desktop and mobile: informational labels are at least 12px, interactive text is at least 13px, and compact descriptive copy is at least 14px. Preserve the editorial density through spacing and letter spacing instead of sub-12px type.
- Present live web projects as a compact, equal-weight archive grid rather than a permanent featured card: four columns on wide desktop, two on tablet, and one on mobile. Project counts must derive from the project data so the collection can grow without rewriting the layout or headline copy.
- Name chapter 02 `Websites` / `网站` and present the section as a connected family of official and independent sites supporting discovery, conversion, and growth.
- Give the OneLaser Homepage V3 card two distinct actions: `Design preview` / `设计预览` links to `https://yonge6.github.io/onelaser-homepage-v3/`, while `Live website` / `上线官网` links to `https://www.1laser.com/`.
- Link the OneLaser Collections and XRF Gen2 Listing portfolio cards directly to `https://yonge6.github.io/onelaser-homepage-v3/collections/` and `https://yonge6.github.io/xrf-gen2-listing/` respectively, as explicitly requested, while keeping the Alibaba mirrors available separately.
- Include Hydra Gen2 Listing and OneLaser Accessories as additional equal-weight website cards, linked to `https://yonge6.github.io/hydra-gen2-listing/` and `https://yonge6.github.io/onelaser-homepage-v3/accessories/`, using real imagery from those sites.
- Include `https://yonge6.github.io/onelaser-homepage-v3/collections/` as the OneLaser Collections live project, using its real product-lineup hero imagery.
- Keep Alibaba-hosted static mirrors at `https://onelaser.wonderelian.com/home/`, `/collections/`, `/xrf-gen2/?page=xrf`, and `/trade-show/` as synchronized domestic fallback routes. Use the explicitly requested direct GitHub Pages destinations for the Homepage design preview, Collections, XRF Gen2, Hydra Gen2, and Accessories portfolio actions; keep the trade-show card on its same-origin mirror.
- Mirror the U.S. trade show booth proposal from `Yonge6/OneLaser/august-trade-show-booth` at commit `5ab4396` to `https://onelaser.wonderelian.com/trade-show/`. Use the supplied 1920×1080 booth render as its portfolio project cover.
- Present AI-generated machine application imagery as chapter 01 immediately after the overview and before the live-project archive: use a horizontally scrollable editorial rail with visible continuation, bilingual outcome-led captions, and click-to-enlarge previous/next navigation. The module should explain the machine, use context, and products or business opportunity at a glance, and remain extensible for future scenes.
- Use four dedicated, wide, text-free OneLaser editorial images in the chapter strip. The chapter order is Machines at Work, Websites, Product Publications, and Banner + Paid Ads; chapter 01 links directly to the real-world scenes module.
- Split campaign work into two explicit submodules: show banner campaigns as a horizontally scrollable, click-to-enlarge rail of paired desktop (3840×1200) and mobile (1500×1800) assets, with newest campaign groups first; then show all 41 supplied paid-ad assets for Hydra 7 Pro, XRF, Cobra, Hydra Gen2, and VertiGo in a separate horizontally scrollable, click-to-enlarge library.
- Treat the user-supplied Hydra 9 Clearance banner pair and Hydra 7 Pro Labor Day paid ad as approved campaign-archive exceptions to the default no-discount framing; keep both newest-first without changing Premier positioning elsewhere.
- Place an e-commerce product-visual module directly after the paid-ad library. Present 18 uncropped representative selections from the Frosted Matte Acrylic and No-Foam Leatherette case studies in a horizontally scrollable, click-to-enlarge rail, while clearly stating the full delivered scope: 85 leather visuals plus 101 acrylic visuals, 186 assets in total. Hide the rail's native scrollbar and any exposed gray track without removing touchpad, touch, arrow-button, or keyboard scrolling.
- Append new user-supplied machine application scenes after the existing scene set, deduplicate visually identical exports, and use full-frame 4:5 thumbnails with dark blurred letterboxing when needed so people, machines, and finished products are not cropped; the lightbox must retain the complete source image.
- Use imagery sourced from the real XRF Gen2 and Maker Business Lab websites for their live-project cards rather than generic editorial placeholders; the Maker Business Lab card uses the official site's single engraved walnut Mountain Feature Wall image rather than a website screenshot or serving-board image.
- Keep the `/home/`, `/collections/`, `/xrf-gen2/`, and `/trade-show/` Alibaba mirrors automatically synchronized from their GitHub `main` branches. Build into immutable releases, validate required entry points and assets, then switch symlinks atomically so a failed sync leaves the previous release online.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.
