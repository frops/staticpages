# Repository Guidelines

## Project Structure & Module Organization
The repository is intentionally lean: top-level HTML documents belong beside `AGENTS.md`, shared styles live in `styles/`, reusable JavaScript widgets in `scripts/`, and media assets in `assets/`. Keep prototypes or throwaway experiments in `sandbox/` so production artifacts remain clean. If you add site-level metadata or templating helpers, place them in `config/` with clear filenames like `navigation.json` or `site.yaml`. Tests targeting frontend behavior should mirror the structure of the page or component under test (`tests/pages/index.spec.ts` for `index.html`).

## Build, Test, and Development Commands
Install dependencies once with `npm install`; the repo expects Node 18+. Use `npm run dev` to launch a local server (configure it via `scripts/dev.js`), `npm run build` to emit optimized assets into `dist/`, and `npm run preview` to sanity check the production bundle. Run `npm run lint` before committing to catch formatting or accessibility regressions.

## Coding Style & Naming Conventions
Stick to 2-space indentation for HTML, CSS, and JavaScript. Favor semantic HTML tags and utility classes prefixed with `u-`, while component classes follow the `c-ComponentName` pattern. JavaScript modules should export named functions in `camelCase`. Always run `npm run lint` (ESLint + Stylelint) and `npm run format` (Prettier) after major edits; both use the repo configs in `config/`. Keep filenames lowercase with dashes, e.g., `about-team.html`.

## Testing Guidelines
UI tests rely on Playwright specs stored under `tests/`. Name files `{page}.spec.ts` and co-locate fixtures in `tests/fixtures/`. Run `npm run test` for the Playwright suite and `npm run test:ci -- --reporter=junit` when integrating with CI. Target baseline coverage of critical flows (navigation, forms, and analytics beacons); update `tests/README.md` with new scenarios.

## Commit & Pull Request Guidelines
Use conventional commits (`feat: add hero banner`, `fix: correct footer links`). Keep commits small and reversible; avoid mixing refactors with content changes. Pull requests must include: summary of user-facing impact, screenshots for visual pages, links to any tracked issues, and a checklist confirming `lint`, `test`, and `build` passed locally. Request at least one review before merging and squash commits when possible.
