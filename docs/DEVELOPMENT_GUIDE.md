# Power Solar - Development Guide

## Getting Started

### Initial Setup

1. **Install Dependencies**
   ```bash
   cd powersolar-project
   pnpm install
   ```

2. **Configure Backend**
   ```bash
   cd apps/backend
   # Create .env file with:
   NODE_ENV=development
   PORT=3001
   CORS_ORIGINS=http://localhost:5173
   DB_TYPE=sqlite
   DB_NAME=powersolar.db
   DB_SYNCHRONIZE=true
   JWT_SECRET=power-solar-dev-secret-minimum-32-characters-required
   ```

3. **Start Development**
   ```bash
   # From project root
   pnpm dev
   ```

## Project Commands

### Root Level Commands
```bash
pnpm dev              # Start both frontend and backend
pnpm build            # Build both applications
pnpm test             # Run all tests
pnpm lint             # Lint all code
pnpm type-check       # Type check all TypeScript
```

### Frontend Commands
```bash
cd apps/frontend
pnpm dev              # Start development server (port 5173)
pnpm build            # Build for production
pnpm preview          # Preview production build
pnpm lint             # Lint frontend code
```

### Backend Commands
```bash
cd apps/backend
pnpm dev              # Start development server (port 3001)
pnpm build            # Build for production
pnpm start:prod       # Start production server
pnpm migration:generate # Generate database migration
pnpm migration:run    # Run pending migrations
```

## Development Workflow

### Adding New Features

1. **Define Types** (if needed)
   - Add types to `packages/shared-types/src/index.ts`
   - Run `pnpm build` in shared-types directory

2. **Backend Changes**
   - Create/modify entities in `apps/backend/src/entities/`
   - Add DTOs in respective module's `dto/` folder
   - Implement service logic
   - Add controller endpoints
   - Register in module

3. **Frontend Changes**
   - Create components in `apps/frontend/src/components/`
   - Add pages in `apps/frontend/src/pages/`
   - Update services for API calls
   - Add translations if needed

### Code Style

**TypeScript**:
- Use strict mode
- Define explicit types
- Avoid `any`
- Use interfaces for objects

**React**:
- Functional components with hooks
- Props types defined
- Meaningful component names
- Extract reusable logic to hooks

**CSS/Styling**:
- TailwindCSS utility classes
- Custom components for complex styles
- Responsive design (mobile-first)
- Dark mode support where appropriate

### Git Workflow (When Ready)

```bash
# Initialize git repository
git init

# Add remote
git remote add origin <your-repo-url>

# Create feature branch
git checkout -b feature/your-feature-name

# Commit changes
git add .
git commit -m "feat: add your feature"

# Push to remote
git push origin feature/your-feature-name
```

## Testing

### Backend Testing
```bash
cd apps/backend
pnpm test                 # Run all tests
pnpm test:watch           # Watch mode
pnpm test:cov             # With coverage
```

### Frontend Testing
```bash
cd apps/frontend
pnpm test                 # Run tests
pnpm test:watch           # Watch mode
```

## Database Management

### Using SQLite (Development)
- Database file: `apps/backend/powersolar.db`
- Auto-created on first run
- Use DB_SYNCHRONIZE=true for auto-sync

### Using PostgreSQL (Production)
1. Create database
2. Update .env:
   ```env
   DB_TYPE=postgres
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=powersolar
   DB_PASSWORD=secure-password
   DB_NAME=powersolar
   DB_SSL=false
   DB_SYNCHRONIZE=false
   ```
3. Run migrations:
   ```bash
   pnpm migration:run
   ```

## API Testing

### Using curl
```bash
# Health check
curl http://localhost:3001/api/health

# Get company info
curl http://localhost:3001/api/company/info

# Submit lead
curl -X POST http://localhost:3001/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+353871234567",
    "eircode": "A65 F4E2",
    "propertyType": "detached",
    "roofType": "pitched",
    "roofOrientation": "south",
    "currentElectricityUsage": "3000-5000",
    "interestedSystemSize": "4-6-kwp",
    "seaiGrantEligibility": "eligible",
    "installationTimeframe": "1-3-months",
    "preferredContact": "email",
    "projectType": "residential-solar"
  }'
```

## Troubleshooting

### Port Already in Use
```bash
# Find process using port 3001 (backend)
lsof -i :3001
kill -9 <PID>

# Find process using port 5173 (frontend)
lsof -i :5173
kill -9 <PID>
```

### Database Issues
```bash
# Reset SQLite database
rm apps/backend/powersolar.db
# Restart backend - will recreate
```

### Type Errors
```bash
# Rebuild shared types
cd packages/shared-types
pnpm build
```

### Clear Node Modules
```bash
# From root
rm -rf node_modules apps/*/node_modules packages/*/node_modules
pnpm install
```

## Performance Optimization

### Frontend
- Lazy load components
- Optimize images
- Use production build
- Enable gzip compression
- CDN for static assets

### Backend
- Database indexing
- Query optimization
- Caching where appropriate
- Rate limiting
- Connection pooling

## Security Checklist

- [ ] Use strong JWT secret (32+ characters)
- [ ] Enable CORS only for trusted origins
- [ ] Validate all input data
- [ ] Sanitize user content
- [ ] Use HTTPS in production
- [ ] Keep dependencies updated
- [ ] Enable rate limiting
- [ ] Implement authentication for admin routes
- [ ] Never commit .env files
- [ ] Use environment variables for secrets

## Deployment Preparation

### Frontend
1. Build: `pnpm build:frontend`
2. Output: `apps/frontend/dist/`
3. Deploy to static hosting
4. Set environment variable for API URL
5. Configure domain

### Backend
1. Build: `pnpm build:backend`
2. Set all environment variables
3. Use PostgreSQL database
4. Run migrations
5. Configure reverse proxy (nginx)
6. Enable SSL
7. Setup monitoring

## Additional Resources

- NestJS Docs: https://docs.nestjs.com/
- React Docs: https://react.dev/
- TailwindCSS: https://tailwindcss.com/
- TypeORM: https://typeorm.io/
- Vite: https://vitejs.dev/

## Support

For technical questions about this codebase:
- Check README.md
- Review POWER_SOLAR_BUSINESS_GUIDE.md
- Inspect example code in emteknik project

For Power Solar business questions:
- Phone: 087-0644982
- Website: https://powersolar.ie/

