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
- Interactions and accessibility: passed; language selection persists through reload, the header and drawer language controls work, Escape and close-button dismissal work, the backdrop is labelled, `aria-modal` is present, project navigation closes the drawer, five external work links render, and clean-tab browser logs contain no warnings or errors.

final result: passed
