# Power Solar - Solar PV Installation Website

> Family-owned Solar PV Installation company serving Dublin & Leinster, Ireland

## 🌞 Project Overview

This is a complete website and CRM system for **Power Solar**, a family-owned solar panel installation company founded by brothers Paddy and Brendan Hickey. The project includes a customer-facing website and an administrative backend for managing leads and projects.

### Company Information

- **Business**: Solar PV Installation (Residential & Commercial)
- **Location**: Ballylinan, Co. Laois, Ireland (R14FH59)
- **Service Area**: Dublin and Leinster region
- **Phone**: 087-0644982
- **Website**: https://powersolar.ie/
- **Experience**: 12+ years (including Australian solar PV sector)

### Key Services

1. **Residential Solar**: SEAI grants up to €1,800, save up to 90% on bills
2. **Commercial Solar**: SEAI grants up to €162,600 for businesses
3. **Solar Maintenance**: Ongoing support and system optimization
4. **Battery Storage**: Energy storage solutions

## 📁 Project Structure

```
powersolar-project/
├── apps/
│   ├── frontend/          # React + Vite frontend application
│   └── backend/           # NestJS backend API
├── packages/
│   └── shared-types/      # Shared TypeScript types
├── docs/                  # Documentation
├── POWER_SOLAR_BUSINESS_GUIDE.md  # Business intelligence & content guide
├── package.json           # Root package.json for monorepo
└── pnpm-workspace.yaml    # PNPM workspace configuration
```

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0
- Docker & Docker Compose (for PostgreSQL)

### Installation

```bash
# Install dependencies
pnpm install

# Start PostgreSQL database
pnpm db:start

# Start development servers (both frontend and backend)
pnpm dev

# Or start individually:
pnpm dev:frontend  # Frontend only
pnpm dev:backend   # Backend only
```

### First Time Setup

1. **Database Setup**:
   ```bash
   # Start PostgreSQL with Docker
   pnpm db:start
   
   # Check it's running
   docker ps
   ```
   
   Database will auto-create tables on first run. See [DATABASE_SETUP.md](./DATABASE_SETUP.md) for details.

2. **Backend Configuration**:
   - `.env` file already configured for PostgreSQL
   - Default credentials (dev only):
     - Host: localhost:5432
     - Database: powersolar
     - User/Password: powersolar/powersolar_dev_password

3. **Frontend Configuration**:
   - `.env` file already configured
   - API URL: http://localhost:3001/api

4. **Start Development**:
   ```bash
   pnpm dev
   ```
   - Frontend: http://localhost:5173
   - Backend: http://localhost:3001
   - API: http://localhost:3001/api
   - Database: localhost:5432

## 🏗️ Architecture

### Frontend (React + Vite)

**Stack**:
- React 18 with TypeScript
- Vite for build tooling
- TailwindCSS for styling
- Framer Motion for animations
- React Router for navigation
- Axios for API calls

**Key Features**:
- Video hero section with rotating messages
- Responsive design (mobile-first)
- Solar-themed color palette (green/blue/yellow)
- Benefits showcase
- Residential vs Commercial services
- SEAI grant information
- Quote request form (to be fully implemented)
- Contact section

**Color Scheme**:
- Primary (Green): #10B981 - Eco-friendly, renewable energy
- Secondary (Blue): #3B82F6 - Trust, reliability, sky
- Accent (Yellow): #F59E0B - Solar, energy, warmth

### Backend (NestJS)

**Stack**:
- NestJS framework
- TypeORM for database ORM
- PostgreSQL database (Docker)
- JWT authentication
- Class-validator for validation

**Database Commands**:
```bash
pnpm db:start    # Start PostgreSQL
pnpm db:stop     # Stop PostgreSQL
pnpm db:restart  # Restart PostgreSQL
pnpm db:logs     # View PostgreSQL logs
pnpm db:reset    # Reset database (deletes all data!)
```

**API Endpoints**:
- `POST /api/leads` - Submit quote request
- `GET /api/leads` - Get all leads (admin)
- `GET /api/leads/:id` - Get specific lead
- `PATCH /api/leads/:id` - Update lead status
- `GET /api/company/info` - Get company information
- `GET /api/health` - Health check

### Shared Types

Common TypeScript types shared between frontend and backend:
- Solar lead types with Ireland-specific fields
- Eircode validation
- Roof types and orientations
- Electricity usage ranges
- System size options
- SEAI grant eligibility
- Installation timeframes

## 📊 Database Schema

### Solar Leads

- Contact: name, email, phone, eircode
- Property: type, roof type, roof orientation
- Energy: current usage, desired system size
- Grant: SEAI eligibility status
- Timeline: installation timeframe
- Project: type (residential/commercial)
- Status: tracking from new → installed

### Users

- Admin user management
- Role-based access (admin, manager, viewer)
- JWT authentication

### Projects

- Completed installations showcase
- Customer testimonials
- System specifications
- Project images

## 🎨 Design System

### Typography

- Display Font: Poppins (headings)
- Body Font: Inter (content)

### Spacing

- Consistent spacing scale (4px base unit)
- Responsive padding and margins
- Mobile-first breakpoints

### Components

- `PowerSolarSection` - Reusable section container with animations
- `PowerSolarVideoHero` - Hero section with video background
- `PowerSolarHorizontalScroll` - Horizontal scrolling container (to be implemented)
- Quote form components (to be fully implemented)

## 🌐 Content & SEO

### SEO Strategy

- Ireland-focused keywords
- Dublin & Leinster service areas
- SEAI grant mentions
- Solar PV terminology
- BER rating improvements

### Key Messaging

- "Save Up to 90% on Electricity Bills"
- "Premium Solar Panels - 30 Year Warranty"
- "SEAI Grants Up to €1,800"
- "Family-Owned & Trusted"
- "500+ Installations Across Leinster"

## 🔐 Environment Variables

### Backend Required Variables

```env
NODE_ENV=development|production
PORT=3001
CORS_ORIGINS=http://localhost:5173
DB_TYPE=sqlite|postgres
DB_NAME=powersolar.db
JWT_SECRET=<secure-secret-32-chars-min>
```

### Optional Variables

See `apps/backend/.env.example` for full list including:
- Database connection (PostgreSQL)
- Logging configuration
- Monitoring settings
- Company information overrides

## 🧪 Testing

```bash
# Run all tests
pnpm test

# Run backend tests
pnpm test:backend

# Run frontend tests
pnpm test:frontend

# Type checking
pnpm type-check
```

## 📦 Building for Production

```bash
# Build both frontend and backend
pnpm build

# Build individually
pnpm build:frontend
pnpm build:backend
```

## 🚢 Deployment

### Backend Deployment

- Deploy to cloud provider (Google Cloud, AWS, Heroku, etc.)
- Set environment variables for production
- Use PostgreSQL database for production
- Enable SSL/HTTPS
- Configure CORS for production domain

### Frontend Deployment

- Deploy to static hosting (Firebase, Netlify, Vercel, etc.)
- Set production API URL
- Configure domain (powersolar.ie)
- Enable CDN for performance

## 📝 Development Notes

### Completed Features

✅ Project structure and monorepo setup
✅ Shared TypeScript types for solar industry
✅ Backend API with NestJS
✅ Database entities for leads, users, projects
✅ Lead management system
✅ Configuration management system
✅ Frontend React application structure
✅ Video hero section with animations
✅ Benefits showcase section
✅ Services section (residential/commercial)
✅ Responsive design foundation
✅ Solar-themed color palette

### To Be Implemented

🔲 Complete quote request form with all fields:
  - Property type, eircode, roof type/orientation
  - Electricity usage, system size interest
  - SEAI grant eligibility checker
  - Multi-step form with validation
🔲 Navigation component with mobile menu
🔲 Footer component with company info
🔲 SEAI grant information section
🔲 How It Works process timeline
🔲 Projects showcase (horizontal scroll)
🔲 Customer testimonials section
🔲 Service areas map
🔲 Admin panel for lead management
🔲 Authentication system
🔲 Email notifications for new leads
🔲 Analytics dashboard
🔲 Blog/Resources section
🔲 FAQ section
🔲 Privacy policy & terms

### Content Needed

📋 Media assets required:
- Company logo (white and black versions)
- Solar panel installation video footage
- Completed project photos
- Founders photos (Paddy & Brendan Hickey)
- Installation process photos
- Team photos
- Equipment photos (panels, inverters)

📋 Content required:
- Customer testimonials
- Project case studies
- Before/after electricity bill examples
- Detailed service descriptions
- FAQ content
- Blog articles
- Privacy policy
- Terms and conditions

## 📞 Contact & Support

For questions about this codebase:
- See `POWER_SOLAR_BUSINESS_GUIDE.md` for business context
- Backend API docs: http://localhost:3001/api (when running)
- Health check: http://localhost:3001/api/health

For Power Solar business inquiries:
- Phone: 087-0644982
- Address: 5 Russell Close, Gracefield Manor, Ballylinan, Co. Laois, R14FH59
- Website: https://powersolar.ie/

## 📄 License

Copyright © 2024 Power Solar. All rights reserved.

---

**Note**: This project was scaffolded as a template within the emteknik-project directory for easy reference to similar architectural patterns. It is designed to be extracted to its own repository with independent version control.

