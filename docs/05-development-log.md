# Development Log

A chronological record of project decisions, progress, and notes.

---

## 2026-06-26 — Project Foundation (Milestone 1)

### Completed

- Initialized Next.js 15 project with TypeScript, Tailwind CSS 4, and ESLint
- Configured App Router with `src/` directory structure
- Created root layout with Geist fonts, site header, and site footer
- Built professional home page introducing Tax Payers Portal Verify
- Defined design tokens in `globals.css` (primary blue, status colors)
- Added reusable `Container` component for consistent layout
- Authored initial documentation:
  - `01-vision.md`
  - `02-product-requirements.md`
  - `03-ui-guide.md`
  - `04-architecture.md`
  - `05-development-log.md`
- Updated `README.md` with product overview, tech stack, and roadmap

### Decisions

- **No backend in Milestone 1** — Focus on frontend foundation and documentation before adding API or database layers.
- **App Router over Pages Router** — Aligns with Next.js 15 defaults and supports future server components for verification.
- **Tailwind CSS 4** — Uses the new `@import "tailwindcss"` and `@theme inline` configuration.
- **Four verification states** — Valid, expired, revoked, invalid. Standardized across product docs and UI.
- **Public verification requires no auth** — Documented as a core principle; issuer admin auth deferred to Milestone 3.

### Known Limitations

- Verify navigation link is disabled (placeholder for Milestone 2)
- No QR scanning or document lookup functionality
- Node.js required locally to run `npm install` and `npm run dev`

### Next Steps

1. Set up database schema and ORM (Milestone 2 prep)
2. Implement `/verify/[id]` page with mock then live data
3. Design verification result component per UI guide status colors
4. Add environment variable configuration (`.env.example`)

---

## Template for Future Entries

```markdown
## YYYY-MM-DD — [Milestone or Feature Name]

### Completed
- ...

### Decisions
- ...

### Blockers
- ...

### Next Steps
- ...
```
