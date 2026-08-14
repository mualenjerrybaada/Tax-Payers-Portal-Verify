# Product Requirements

## Overview

This document defines the functional and non-functional requirements for Tax Payers Portal Verify. Requirements are organized by milestone to guide phased delivery.

---

## Milestone 1 — Foundation (Current)

### Goals

Establish project structure, branding, documentation, and a public-facing landing page.

### Requirements

| ID    | Requirement                                      | Status      |
| ----- | ------------------------------------------------ | ----------- |
| M1-01 | Next.js application with TypeScript and Tailwind | Done        |
| M1-02 | Professional home page introducing the product   | Done        |
| M1-03 | Project documentation in `/docs`                 | Done        |
| M1-04 | README with roadmap and tech stack               | Done        |

### Out of Scope (Milestone 1)

- User authentication
- Database integration
- QR code generation
- Admin dashboard
- Public verification flow

---

## Milestone 2 — Public Verification

### Goals

Allow anyone to scan or enter a document reference and receive a verification result.

### Requirements

| ID    | Requirement                                                |
| ----- | ---------------------------------------------------------- |
| M2-01 | Verification page accessible via QR code URL               |
| M2-02 | Display one of four statuses: valid, expired, revoked, invalid |
| M2-03 | Show document metadata safe for public display (type, issuer, dates) |
| M2-04 | Mobile-responsive verification UI                            |
| M2-05 | Graceful handling of malformed or unknown document IDs       |

---

## Milestone 3 — Issuer & Document Management

### Goals

Enable authorized organizations to create, manage, and revoke documents.

### Requirements

| ID    | Requirement                                      |
| ----- | ------------------------------------------------ |
| M3-01 | Issuer authentication and role-based access      |
| M3-02 | Document creation with unique identifiers        |
| M3-03 | QR code generation linked to verification URL    |
| M3-04 | Document lifecycle: active, expired, revoked       |
| M3-05 | Admin dashboard for issuers                        |

---

## Milestone 4 — Platform & Scale

### Goals

Harden the platform for production use with auditing, APIs, and operational tooling.

### Requirements

| ID    | Requirement                                      |
| ----- | ------------------------------------------------ |
| M4-01 | Verification audit log                           |
| M4-02 | Public API for third-party integrations          |
| M4-03 | Rate limiting and abuse prevention               |
| M4-04 | Multi-issuer support with issuer branding        |
| M4-05 | Deployment pipeline and monitoring               |

---

## Non-Functional Requirements

| Category        | Requirement                                           |
| --------------- | ----------------------------------------------------- |
| Performance     | Verification results within 2 seconds (p95)           |
| Availability    | 99.9% uptime target for public verification           |
| Security        | HTTPS only; no sensitive data in QR payloads          |
| Accessibility   | WCAG 2.1 AA compliance for public pages               |
| Maintainability | TypeScript strict mode; documented architecture       |
