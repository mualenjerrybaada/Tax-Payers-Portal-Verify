# Architecture

## Overview

Tax Payers Portal Verify is a document verification platform built as a modern web application. This document describes the intended architecture. Backend services are not implemented in Milestone 1.

## High-Level Diagram

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│  Public User    │────▶│  Next.js App     │────▶│  Verification   │
│  (QR scan)      │     │  (Frontend)      │     │  API (future)   │
└─────────────────┘     └──────────────────┘     └────────┬────────┘
                                                          │
                        ┌──────────────────┐              │
                        │  Issuer Admin    │              ▼
                        │  (future)        │     ┌─────────────────┐
                        └────────┬─────────┘     │  Database       │
                                 │               │  (future)       │
                                 └──────────────▶└─────────────────┘
```

## Tech Stack

| Layer       | Technology                          | Purpose                        |
| ----------- | ----------------------------------- | ------------------------------ |
| Framework   | Next.js 15 (App Router)             | Full-stack React framework     |
| Language    | TypeScript (strict)                 | Type safety                    |
| Styling     | Tailwind CSS 4                      | Utility-first CSS              |
| Fonts       | Geist Sans / Geist Mono             | Typography via `next/font`     |
| Linting     | ESLint + eslint-config-next         | Code quality                   |
| Deployment  | TBD (Vercel recommended)            | Hosting                        |

## Project Structure

```
taxpayerssportal/
├── docs/                    # Product and engineering documentation
├── public/                  # Static assets
├── src/
│   ├── app/                 # Next.js App Router pages and layouts
│   │   ├── layout.tsx       # Root layout with header/footer
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles and design tokens
│   └── components/          # Reusable UI components
│       ├── container.tsx
│       ├── site-header.tsx
│       └── site-footer.tsx
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## Routing (Planned)

| Route            | Milestone | Description                    |
| ---------------- | --------- | ------------------------------ |
| `/`              | M1        | Landing page                   |
| `/verify/[id]`   | M2        | Public document verification   |
| `/admin`         | M3        | Issuer dashboard               |
| `/api/verify`    | M2        | Verification API endpoint      |
| `/api/documents` | M3        | Document management API        |

## Data Model (Planned)

Not implemented in Milestone 1. Anticipated entities:

### Document

| Field        | Type       | Description                     |
| ------------ | ---------- | ------------------------------- |
| id           | UUID       | Unique document identifier      |
| issuerId     | UUID       | Reference to issuing org        |
| type         | string     | Document category               |
| status       | enum       | valid, expired, revoked         |
| issuedAt     | timestamp  | Issue date                      |
| expiresAt    | timestamp? | Optional expiration             |
| revokedAt    | timestamp? | Set when revoked                |
| metadata     | JSON       | Public-safe display fields      |

### Issuer

| Field   | Type   | Description              |
| ------- | ------ | ------------------------ |
| id      | UUID   | Unique issuer identifier |
| name    | string | Organization name        |
| slug    | string | URL-safe identifier      |

## Security Considerations (Future)

- QR codes contain only a document ID or short verification URL — no PII embedded
- All API endpoints over HTTPS
- Rate limiting on public verification to prevent enumeration
- Issuer actions require authenticated sessions
- Audit log for verification requests and document changes

## Milestone 1 Scope

Milestone 1 delivers static frontend pages and documentation only. No API routes, database connections, or authentication middleware are present.
