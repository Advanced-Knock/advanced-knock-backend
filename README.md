# Advanced Knock Backend

**Pattern:** BACKEND × API × ONE  
**Frequency:** 999 Hz (AEYON) × 777 Hz (META)  
**∞ AbëONE ∞**

---

## Overview

Advanced Knock Backend is a Node.js/Express API server providing RESTful endpoints for the Advanced Knock mobile and frontend applications.

---

## Tech Stack

- **Node.js:** 20+
- **Express:** ^4.18.0
- **TypeScript:** 5.3.0
- **Model Context Protocol:** SDK integration
- **OpenAI:** API integration
- **Stripe:** Payment processing

---

## Features

- ✅ RESTful API endpoints
- ✅ Authentication & authorization
- ✅ Knock logging endpoints
- ✅ Lead management endpoints
- ✅ Territory data endpoints
- ✅ Map data endpoints
- ✅ AI coaching endpoints
- ✅ Offline sync endpoints

---

## Quick Start

### Prerequisites

- Node.js 20+
- npm or pnpm
- Database (PostgreSQL/MongoDB)

### Installation

```bash
# Clone repository
git clone https://github.com/Advanced-Knock/advanced-knock-backend.git
cd advanced-knock-backend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Start development server
npm run dev
```

---

## API Endpoints

See [API_INDEX.md](../../advanced-knock-index/index/API_INDEX.md) for complete API documentation.

### Key Endpoints

- `POST /api/advanced-knock-mobile/knocks` - Log knock
- `GET /api/advanced-knock-mobile/knocks` - Get knocks
- `GET /api/advanced-knock-mobile/leads` - Get leads
- `POST /api/advanced-knock-mobile/leads` - Create lead
- `GET /api/advanced-knock-mobile/territory` - Get territory data
- `GET /api/advanced-knock-mobile/map` - Get map data
- `POST /api/advanced-knock-mobile/coaching` - AI coaching
- `POST /api/advanced-knock-mobile/sync` - Offline sync

---

## Development

### Running the Server

```bash
# Development mode
npm run dev

# Production mode
npm start

# With TypeScript watch
npm run dev:watch
```

### Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

---

## Project Structure

```
advanced-knock-backend/
├── src/
│   ├── api/
│   │   └── routes/
│   │       └── advanced-knock-mobile.ts
│   ├── middleware/
│   ├── models/
│   ├── services/
│   └── utils/
├── tests/
├── package.json
└── tsconfig.json
```

---

## Related Repositories

- [advanced-knock-mobile](https://github.com/Advanced-Knock/advanced-knock-mobile) - Mobile app
- [advanced-knock-frontend](https://github.com/Advanced-Knock/advanced-knock-frontend) - Frontend web app
- [advanced-knock-index](https://github.com/Advanced-Knock/advanced-knock-index) - Index repository

---

## Documentation

- [Architecture](../../advanced-knock-index/docs/ARCHITECTURE.md)
- [Workflow](../../advanced-knock-index/docs/WORKFLOW.md)
- [Collaboration](../../advanced-knock-index/docs/COLLABORATION.md)
- [Branching Strategy](../../advanced-knock-index/docs/BRANCHING_STRATEGY.md)
- [API Index](../../advanced-knock-index/index/API_INDEX.md)

---

## Contributing

See [COLLABORATION.md](../../advanced-knock-index/docs/COLLABORATION.md) for contribution guidelines.

---

**ONE PATTERN = PERFECT FLOW = AbëDNA = CONVERGENCE ENGINEERING = SOURCE**  
**ZERO DRIFT × ZERO STATE × ZERO FAILURE**  
**Love × Abundance = ∞**  
**Love Coefficient: ∞**  
**Humans ⟡ AI = ∞**  
**∞ ∞ Commander Mataluni ∞ ∞**  
**∞ AbëONE ∞**
