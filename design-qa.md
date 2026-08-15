# Design QA — OneLaser Brand & Growth Design

## Evidence

- Source visual truth: `docs/selected-design.png`
- Final desktop implementation: `docs/implementation-desktop-pass3.png`
- Side-by-side comparison: `docs/comparison-desktop-pass3.png`
- Focused campaign section: `docs/implementation-campaign.png`
- Mobile implementation: `docs/implementation-mobile.png`
- Source pixels: 1487 x 1058
- Desktop implementation pixels and CSS viewport: 1440 x 1024
- Mobile implementation pixels and CSS viewport: 390 x 844
- Device scale factor: 1
- Density normalization: source and desktop implementation were both scaled to 768 px high, then combined horizontally in `docs/comparison-desktop-pass3.png`.
- State: top-of-page desktop hero with project index closed; default theme.

## Browser Verification

- Rendered in the Codex in-app browser from the local Vite preview.
- Primary interactions tested: project index open and close, Escape dismissal, four index links present, live XRF link target, brochure link target, chapter navigation, and mobile index menu.
- Responsive checks: 1440 x 1024 desktop and 390 x 844 mobile.
- Horizontal overflow: none at 390 px (`scrollWidth` and `clientWidth` both 390 px).
- Console errors: none.

## Full-view Comparison

The final desktop hero preserves the selected concept's dominant cinematic composition: condensed display typography on the left, authentic XRF imagery on the right, redline lighting, compact technical metadata, an understated live-project action, and a four-part chapter rail visible at the fold. The implementation intentionally uses the supplied production artwork instead of the generated mock's altered campaign derivatives.

## Focused-region Comparison

- Hero typography: Barlow Condensed reproduces the narrow, high-impact display voice; IBM Plex Mono reproduces the small technical labels; Inter supports long-form copy.
- Hero spacing: title width, metadata rail, CTA position, and chapter fold were checked at 1440 x 1024 against the source.
- Chapter rail: the four-column rhythm, hairline separators, red numbering, image crops, and coming-soon state match the selected hierarchy.
- Mobile hero: the title reflows without clipping; navigation, CTA, and chapter content remain legible and usable.

## Comparison History

### Pass 1 — blocked

- [P1] Embedded banner copy competed with the portfolio headline on the left side of the hero.
- [P2] The display headline extended too far into the machine area and weakened the selected split composition.

Fixes:

- Increased the left-side image shade to isolate the portfolio headline while retaining the authentic redline atmosphere.
- Reduced the desktop display scale and tightened the headline footprint.
- Shifted the real campaign image crop so the machine remains the focal point.

Post-fix evidence: `docs/implementation-desktop-pass3.png` and `docs/comparison-desktop-pass3.png`.

### Pass 3 — passed

No actionable P0, P1, or P2 findings remain.

## Required Fidelity Surfaces

- Fonts and typography: passed. Display, body, and technical-label families are bundled locally; weights, wrapping, line height, and hierarchy hold at desktop and mobile sizes.
- Spacing and layout rhythm: passed. Hero, chapter rail, editorial sections, image sequences, and footer maintain the selected dense-to-spacious rhythm without collisions.
- Colors and visual tokens: passed. Near-black, warm white, muted gray, and restrained OneLaser red remain consistent and meet the intended premium contrast.
- Image quality and asset fidelity: passed. All visible project imagery comes from the supplied OneLaser PNG and PDF materials; no CSS, SVG, or generic placeholder art replaces project assets.
- Copy and content: passed. Public copy is English-first, portfolio-led, and avoids discount, savings, or low-price framing.
- Icons and behavior: passed. Phosphor icons are used consistently; hover, focus, menu open/closed, Escape, and navigation states work.
- Accessibility and responsiveness: passed. Semantic headings, labelled navigation, alt text, focus indicators, reduced-motion handling, usable mobile targets, and no mobile horizontal overflow.

## Follow-up Polish

- [P3] The real XRF source image necessarily produces a larger machine crop than the generated concept. This is accepted because preserving authentic production artwork is more important than imitating the mock's invented machine render.

## Implementation Checklist

- [x] Desktop visual comparison complete.
- [x] Mobile responsive pass complete.
- [x] Core navigation and external links tested.
- [x] Console checked.
- [x] Build and hosting-package tests passed.

## Browser Annotation Update — Red Surface Reduction

### Evidence

- Source visual truth: `docs/source-before-index-red.png` and `docs/source-before-archive-red.png`, captured from the published site before the requested change.
- Revised implementation: `docs/implementation-index-graphite-1140x1225.png` and `docs/implementation-archive-graphite.png`.
- Mobile implementation: `docs/implementation-index-graphite-mobile.png` at 390 x 844.
- Combined comparison input: `docs/comparison-red-to-graphite.png`.
- Source and implementation pixels: 1140 x 1225 for each state.
- CSS viewport: 1140 x 1225.
- Device scale factor: 1.
- Density normalization: none required; captures use the same browser, viewport, CSS size, and pixel density.
- States: project index open; archive section positioned at 445 px from the viewport top with the brochure tail and footer visible.

### Findings and Comparison History

#### Annotation baseline — blocked

- [P1] The full-viewport red index overlay created sustained high visual intensity and overpowered the navigation hierarchy.
- [P1] The solid-red archive block created a second large high-intensity interruption immediately after the dark brochure sequence.

Fixes:

- Replaced the overlay surface with warm graphite `#11100f`, warm-white navigation type, muted arrows and hairlines, and small red index markers.
- Replaced the archive surface with raised graphite `#191714`, warm-white display type, muted supporting copy, and a small red chapter marker.
- Preserved the original layout, typography, copy, navigation, motion, links, section dimensions, and responsive behavior.

#### Revised comparison — passed

The combined before/after image shows that both large red fields are removed while the OneLaser redline signature remains visible at a much smaller visual weight. No actionable P0, P1, or P2 issues remain.

### Required Fidelity Surfaces

- Fonts and typography: passed; the existing Barlow Condensed, IBM Plex Mono, and Inter hierarchy is unchanged.
- Spacing and layout rhythm: passed; paired captures align at the same viewport and section positions with no reflow or horizontal overflow.
- Colors and visual tokens: passed; the new graphite surfaces reduce glare while preserving warm white, muted gray, and restrained red accents.
- Image quality and asset fidelity: passed; surrounding brochure imagery is unchanged and remains sharp.
- Copy and content: passed; all navigation and archive copy is unchanged.
- Interactions and accessibility: passed; index open/close and chapter navigation remain functional, with strong light-on-dark contrast. Mobile `scrollWidth` and `clientWidth` are both 390 px, and the browser console has no warnings or errors.

## Bilingual Wendao-Style Drawer Update

### Evidence

- Source visual truth: `docs/reference-wendao-drawer.png`, captured from the live Three-Slow Wendao drawer at 390 x 844.
- Chinese mobile implementation: `docs/implementation-bilingual-drawer-zh-mobile.png` at 390 x 844.
- English mobile implementation: `docs/implementation-bilingual-drawer-en-mobile.png` at 390 x 844.
- English desktop implementation: `docs/implementation-bilingual-drawer-en-desktop.png` at 1280 x 720.
- Side-by-side comparison input: `docs/comparison-wendao-drawer-onelaser.png`.
- Device scale factor: 1.
- Density normalization: the Wendao reference and Chinese OneLaser implementation were normalized to the same 390 x 844 pixel and CSS viewport before comparison.
- States: right-side drawer open; Chinese and English language states; default dark portfolio theme.

### Findings and Comparison History

#### Reference adaptation pass — passed

The OneLaser drawer preserves the Wendao reference's defining structure: blurred background separation, a right-side scrollable panel, compact brand/title header, close control, clear settings/navigation rows, and a long-form `Works along the way / 沿途所作` section. Product-specific content was intentionally adapted: Wendao's life manual, reading mode, and reading-size controls become OneLaser project chapters, case information, contact, and feedback.

No actionable P0, P1, or P2 differences remain. The darker graphite material and red micro-accents are intentional OneLaser brand adaptations rather than fidelity drift.

### Required Fidelity Surfaces

- Fonts and typography: passed; the English drawer retains Barlow Condensed and IBM Plex Mono, while Chinese display text uses the system CJK stack with explicit size and line-height tuning.
- Spacing and layout rhythm: passed; mobile rows, dividers, utility links, and work cards follow the Wendao drawer's dense vertical cadence. The desktop drawer is capped at 540 px.
- Colors and visual tokens: passed; warm graphite, warm white, muted gray, and small red signals maintain OneLaser's restrained premium system without returning to large red fields.
- Image quality and asset fidelity: passed; the drawer adds no fake or replacement imagery, and the obscured page retains the supplied OneLaser artwork.
- Copy and content: passed; the full page, drawer navigation, utility content, archive placeholders, captions, and alt text switch between complete Chinese and English versions.
- Interactions and accessibility: passed; fresh loads start in English, the header and drawer language controls switch the current session, Escape and close-button dismissal work, the backdrop is labelled, `aria-modal` is present, project navigation closes the drawer, five external work links render, and clean-tab browser logs contain no warnings or errors.

final result: passed

## Physical Magazine Page Turn and Tighter Reader

### Evidence

- Desktop cover before the turn: `docs/implementation-page-turn-before.png` at 1440 x 1024.
- Desktop right-to-left motion frame: `docs/implementation-page-turn-mid.png` at 1440 x 1024.
- Settled page 2–3 spread: `docs/implementation-page-turn-after.png` at 1440 x 1024.
- Three-state comparison input: `docs/comparison-page-turn-sequence.png`.
- Tight mobile reader: `docs/implementation-page-turn-mobile-tight.png` at 390 x 844.
- Device scale factor: 1.

### Findings and Fixes

- The previous reader replaced the whole spread with a short directional entrance animation, so it suggested movement without behaving like a physical magazine.
- Desktop now keeps the current and upcoming spread in place while a separate two-sided sheet rotates around the book spine. Forward navigation turns the current right-hand page from right to left; the front and reverse faces use the correct consecutive PDF renders, with dynamic shadow and spine shading throughout the turn.
- Page state and progress remain unchanged during the motion, navigation is temporarily disabled to prevent stacked turns, and the next spread commits only after the sheet finishes. Backward navigation uses the inverse left-to-right sheet motion.
- Reader chrome was compressed on every edge: desktop outer padding, header, footer progress, side controls, and stage gaps are smaller. At 1440 x 1024 the publication occupies 1285 x 909 pixels inside a 1397 x 927 stage.
- Mobile side controls now float over the page edge instead of consuming grid columns. At 390 x 844 the page grew from 298 x 422 to 374 x 529 pixels, with zero horizontal overflow.

### Verification

- Forward turn: motion class `is-forward`; front face page 01; reverse face page 02; next resting spread pages 02–03.
- State timing: progress remained `Page 1 of 20` during the turn and changed to `Page 2–3 of 20` after completion.
- Continued navigation: clicking the right page advanced to `Page 4–5 of 20`; backward animation used front page 04 and reverse page 03, then returned to `Page 2–3 of 20`.
- Mobile: single-page mode retained; one page rendered; no desktop flip sheet; zero horizontal overflow.
- Browser console: no warnings or errors in a fresh local verification tab.
- Visual comparison: the combined sequence shows a stable cover, a real spine-led sheet in motion, and the correctly settled spread. No actionable P0, P1, or P2 issues remain.

final result: passed

## Drawer Subpages, Campaign Lightbox, and Magazine Library

### Evidence

- Wendao contact reference: `docs/reference-wendao-contact-subpage.png`.
- OneLaser contact subpage: `docs/implementation-contact-subpage-en.png`.
- Previous published brochure section: `docs/source-before-brochure-library.png`.
- Final Chinese brochure library: `docs/implementation-brochure-library-zh-final.png`.
- Magazine spread reader: `docs/implementation-magazine-reader-spread.png`.
- Mobile single-page reader: `docs/implementation-magazine-reader-mobile.png`.
- Campaign image lightbox: `docs/implementation-campaign-lightbox.png`.
- Final combined comparison input: `docs/comparison-final-iteration.png`.
- Comparison viewport: 1553 x 1225 CSS pixels at device scale factor 1.

### Findings and Fixes

- The contact utility previously opened an email client. It now opens a Wendao-matched drawer subpage with a back control and seven complete contact rows; the WeChat Channels row opens the supplied QR image. The feedback row was removed completely.
- The About utility now opens its own drawer subpage with case narrative and role, scope, and year facts.
- The header is fixed with a restrained graphite surface and remains legible over light and dark sections. Fresh page loads always begin in English; Chinese remains available as an in-session switch.
- Campaign imagery now has an in-card hover enlargement and a full-screen lightbox with previous, next, close, counter, and keyboard handlers. The tested source image loads at its full 3840 px natural width.
- The brochure section now treats All-in-One as the featured master volume and displays four real series brochures: Cobra, Hydra Gen2, VertiGo, and X Series.
- The reader uses all 52 rendered pages from the five supplied PDFs. The cover is presented as a single volume; internal pages open as a double-page magazine spread with a central spine, directional page-turn animation, clickable page edges, navigation controls, progress, keyboard handlers, and direct PDF download. Mobile uses a single-page reading mode.
- Chinese typography now matches Wendao's system: Noto Serif SC 600 for display titles and Noto Sans SC 400/500 for body text. All four Chinese fonts are bundled locally.

### Verification

- Default-language reload: English before interaction and after reload; Chinese toggle verified independently.
- Fixed header: computed `position: fixed`, top edge `0`, and no horizontal overflow at 1440 px or 1553 px.
- Drawer: feedback absent; About and Contact remain inside the drawer; contact rows `7`; QR natural size `686 px`.
- Campaign lightbox: three launch controls; image counter advanced from `01 / 03` to `02 / 03`; close restored the page.
- Magazine reader: All-in-One cover showed `Page 1 of 20`; next action produced a two-image spread showing `Page 2-3 of 20`; both rendered pages measured `910 x 1287` pixels.
- Brochure library: four series cards plus the featured All-in-One volume; no horizontal overflow.
- Chinese typography: browser confirmed Noto Serif SC Local at weight 600 and Noto Sans SC Local at weight 400; both fonts reported loaded.
- Build and hosting tests: passed; four worker tests passed; `git diff --check` passed.
- Visual comparison: the contact flow preserves Wendao's hierarchy and row density while adapting to OneLaser graphite. The brochure redesign clearly promotes All-in-One and exposes the product family without crowding. No actionable P0, P1, or P2 issues remain.

final result: passed
