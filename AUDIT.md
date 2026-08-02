# fresh-people-co-za — Project Audit

**Repo:** `YassinAliYassin/fresh-people-co-za`
**Audit date:** August 2026
**Type:** Production marketing/talent site — brand ambassadors, models, hospitality staff (React + Vite + Tailwind + TS)
**Status:** **Live production site** at https://fresh-people.co.za

---

## Component scores (0–10)

| Area | Score | Notes |
| --- | --- | --- |
| Architecture | 8.0 | Clean SPA with pages, reusable components, a data layer (`src/data/blogPosts.js`), SEO component, Layout wrapper, and client routing. |
| Code quality | 8.0 | Mixed JSX/TSX but consistent; well-factored components; SEO-handling built in. |
| Security | 7.5 | Static marketing site; no server-side secrets in the codebase; FTP credentials stored as CI secrets only. No committed secrets. |
| Documentation | 8.0 | Already strong: README, CONTRIBUTING, CODE_OF_CONDUCT, SECURITY, LICENSE, issue templates, PR template, dependabot all present. |
| Maintainability | 8.0 | Good file organisation, editorconfig/dependabot/stale/CODEOWNERS automation already in place. |
| Performance | 7.5 | Vite production build; static content. No obvious issues. |
| Developer experience | 8.0 | `npm run dev`, build, preview; existing deploy workflows; clear CONTRIBUTING. |
| Business readiness | 9.0 | **Live deployed** with a documented FTP deploy pipeline, release drafter, and GitHub Pages mirror. Strongest of the batch. |

**Overall weighted score: ~8.0** — a mature, well-documented, live production site. The main gaps this pass closes: no dedicated CI gate and no CHANGELOG/`.editorconfig`/`.prettierrc`.

---

## Improvements

### High priority

- **H1 — Dedicated CI workflow.** Existing workflows deploy on push; add a pure CI job (install, type-check, build) on every push/PR so PRs are gated before touching the live pipeline. *(done in this pass)*

### Medium priority

- **M1 — Add lint config.** The repo has no ESLint script; add one for consistent JS/JSX/TSX style.
- **M2 — Add a test harness.** No test script; consider render/smoke tests for routes/components.

### Low priority

- **L1 — Normalise JSX→TSX** migration over time.
- **L2 — Replace placeholder screenshots** with real captures.

---

## Security audit notes

- FTP deployment credentials are referenced only via `${{ secrets.FTP_PASSWORD }}` and are **never committed**. **Good.**
- No API keys or secrets in the source tree. **Confirmed.**
- Live deployment (FTP to `public_html`) and hosting config are **intentionally untouched**.

---

## Tech debt estimate

- **Very low.** The repo is already well-maintained. Missing items are CI-gating, lint config, and tests.
- Estimated effort to clear all listed items: **~1 day**.
- Estimated total outstanding tech debt: **low (<1 day).**

---

## Recommendation

Adds a CI gate, CHANGELOG, `.editorconfig`, `.prettierrc`, an upgraded README, and an AUDIT — no public API changes and no touching the live deploy pipeline.
