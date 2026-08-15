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

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.
