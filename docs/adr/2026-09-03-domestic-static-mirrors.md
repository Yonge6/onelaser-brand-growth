# ADR: Domestic static mirrors for OneLaser projects

Date: 2026-09-03

## Context

The portfolio links to static experiences hosted on GitHub Pages. Those pages and their assets can load slowly for visitors in mainland China. The public portfolio already runs on Alibaba Cloud behind `onelaser.wonderelian.com`.

## Decision

Publish versioned, read-only static builds on the Alibaba Cloud server and expose them through dedicated same-origin paths:

- `/home/` mirrors `Yonge6/onelaser-homepage-v3` at `635e982b898365b65e1043a8bd421190d259a6ec`.
- `/collections/` serves the collection route from the same homepage build.
- `/xrf-gen2/?page=xrf` mirrors `Yonge6/xrf-gen2-listing` at `f4b82a21a7c371ff10de7f583156fa10692d7683`.
- `/trade-show/` mirrors `Yonge6/OneLaser/august-trade-show-booth` at `5ab4396af0f55e68b7a2741809fb55ef8f585f2c`.

Nginx serves the files directly from `/srv/wonderelian/mirrors`. Each public path points to a versioned release through an atomic symlink. The portfolio remains an independent release and only changes its outbound project URLs.

## Alternatives considered

1. Keep GitHub Pages links. Lowest operational work, but does not solve domestic latency.
2. Reverse proxy GitHub Pages with a cache. Smaller initial deployment, but a cold cache still depends on GitHub availability and adds upstream failure modes.
3. Static Alibaba mirrors. Chosen because these experiences are static, the response path stays domestic, and releases can be pinned and rolled back without changing application code.

## Operations and failure handling

- Build each source at its pinned commit with the public base path used in production.
- Validate referenced JS, CSS, fonts, and images before activation.
- Back up Nginx configuration, run `nginx -t`, and reload only after a successful test.
- Switch mirror symlinks atomically and retain the previous targets for rollback.
- Keep GitHub Pages online as an independent source/fallback, but do not link visitors to it from the portfolio.
- The mirror contains static public files only; it adds no credentials, server-side execution, or arbitrary upstream proxying.
