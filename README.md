# Tax Payers Portal Verify

A document verification platform that allows organizations to issue official documents with QR codes and enables the public to instantly verify whether a document is **valid**, **expired**, **revoked**, or **invalid**.

## Purpose

Tax and government documents are targets for fraud and misrepresentation. Tax Payers Portal Verify provides a transparent verification layer: issuers embed QR codes on documents, and anyone can scan them to receive an immediate, unambiguous authenticity result — no account required.

## Tech Stack

| Technology   | Version | Role                          |
| ------------ | ------- | ----------------------------- |
| Next.js      | 15      | React framework (App Router)  |
| React        | 19      | UI library                    |
| TypeScript   | 5       | Type-safe development         |
| Tailwind CSS | 4       | Styling and design system     |
| ESLint       | 9       | Linting                       |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18.18 or later
- npm (included with Node.js)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
├── docs/                 # Product and engineering documentation
├── public/               # Static assets
├── src/
│   ├── app/              # Pages, layouts, global styles
│   └── components/       # Reusable UI components
├── package.json
└── README.md
```

See [`docs/04-architecture.md`](docs/04-architecture.md) for detailed architecture notes.

## Documentation

| Document | Description |
| -------- | ----------- |
| [01-vision.md](docs/01-vision.md) | Product vision and principles |
| [02-product-requirements.md](docs/02-product-requirements.md) | Requirements by milestone |
| [03-ui-guide.md](docs/03-ui-guide.md) | Design system and UI standards |
| [04-architecture.md](docs/04-architecture.md) | Technical architecture |
| [05-development-log.md](docs/05-development-log.md) | Development progress log |

## Milestone Roadmap

### Milestone 1 — Foundation (Current)

- [x] Next.js project setup with TypeScript and Tailwind CSS
- [x] Professional landing page
- [x] Project documentation
- [x] README and development log

### Milestone 2 — Public Verification

- [ ] Verification page (`/verify/[id]`)
- [ ] QR code URL routing
- [ ] Four-status result display (valid, expired, revoked, invalid)
- [ ] Verification API endpoint
- [ ] Database integration

### Milestone 3 — Issuer Management

- [ ] Issuer authentication
- [ ] Document creation and lifecycle management
- [ ] QR code generation for issued documents
- [ ] Admin dashboard

### Milestone 4 — Platform & Scale

- [ ] Verification audit logging
- [ ] Public API for integrations
- [ ] Rate limiting and security hardening
- [ ] Multi-issuer support
- [ ] Production deployment pipeline

## License

Private — all rights reserved.
