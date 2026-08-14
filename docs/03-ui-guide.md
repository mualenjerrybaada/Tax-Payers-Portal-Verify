# UI Guide

## Design Philosophy

Tax Payers Portal Verify should feel authoritative, calm, and trustworthy — similar to a modern government digital service. The interface prioritizes clarity over decoration. Users scanning a document need an immediate, unambiguous answer.

## Brand Identity

### Product Name

**Tax Payers Portal Verify**

### Tone

- Professional and neutral
- Plain language, no jargon on public pages
- Reassuring for verifiers; efficient for issuers (future)

## Color Palette

| Token          | Value     | Usage                              |
| -------------- | --------- | ---------------------------------- |
| Primary        | `#1e40af` | Headers, links, primary actions    |
| Primary Dark   | `#1e3a8a` | Hover states, emphasis             |
| Accent         | `#0d9488` | Secondary highlights               |
| Background     | `#f8fafc` | Page background                    |
| Foreground     | `#0f172a` | Body text, headings                |
| Muted          | `#64748b` | Supporting text, labels            |
| Border         | `#e2e8f0` | Dividers, card borders             |
| Card           | `#ffffff` | Elevated surfaces                  |

### Verification Status Colors

| Status  | Color              | Usage                    |
| ------- | ------------------ | ------------------------ |
| Valid   | Emerald (`#10b981`) | Success state indicator |
| Expired | Amber (`#f59e0b`)   | Warning state indicator |
| Revoked | Orange (`#f97316`)  | Caution state indicator |
| Invalid | Red (`#ef4444`)     | Error state indicator   |

Status colors must always be paired with a text label — never rely on color alone.

## Typography

- **Primary font:** Geist Sans (via `next/font`)
- **Monospace:** Geist Mono (codes, document IDs)
- **Headings:** Bold, tight tracking (`tracking-tight`)
- **Body:** Regular weight, relaxed line height (`leading-relaxed`)

### Scale

| Element       | Size (mobile → desktop) |
| ------------- | ----------------------- |
| Hero heading  | `text-4xl` → `text-6xl` |
| Section title | `text-3xl`              |
| Card title    | `text-xl`               |
| Body          | `text-base` → `text-lg` |
| Caption       | `text-sm`               |

## Layout

- **Max content width:** `max-w-6xl` (72rem), centered with `px-6` padding
- **Section spacing:** `py-20` vertical rhythm between major sections
- **Cards:** Rounded (`rounded-xl`), subtle border, light shadow on hero elements

## Components

### Site Header

Fixed-height (`h-16`), logo mark + product name, minimal navigation. Verify link disabled until Milestone 2.

### Site Footer

Copyright, phase indicator, muted text.

### Container

Reusable wrapper enforcing max-width and horizontal padding.

## Accessibility

- Semantic HTML (`header`, `main`, `footer`, `nav`, `article`)
- `aria-label` on navigation landmarks
- Sufficient color contrast (4.5:1 minimum for body text)
- Focus-visible styles on interactive elements
- Status indicators include text labels

## Responsive Breakpoints

Follow Tailwind defaults:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px

Grids collapse from multi-column to single-column on mobile.

## Future UI (Not Yet Built)

- Verification result page with large status badge
- QR scanner integration (camera access)
- Manual document ID entry fallback
- Issuer admin dashboard (Milestone 3)
