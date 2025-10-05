# Database Setup Guide

## PostgreSQL with Docker (Recommended for Development)

### Quick Start

1. **Start PostgreSQL container:**
   ```bash
   docker-compose up -d
   ```

2. **Verify it's running:**
   ```bash
   docker ps
   # Should see: powersolar-postgres
   ```

3. **Start the backend:**
   ```bash
   pnpm dev
   ```

That's it! The database will auto-create tables on first run (DB_SYNCHRONIZE=true).

---

## Docker Commands

```bash
# Start database
docker-compose up -d

# Stop database (keeps data)
docker-compose stop

# Stop and remove container (keeps data)
docker-compose down

# Stop and DELETE ALL DATA
docker-compose down -v

# View logs
docker-compose logs -f postgres

# Restart database
docker-compose restart
```

---

## Connect to Database

### Using psql (in container)
```bash
docker exec -it powersolar-postgres psql -U powersolar -d powersolar
```

### Common psql commands:
```sql
\dt              -- List tables
\d solar_leads   -- Describe table
SELECT * FROM solar_leads;
\q               -- Quit
```

### Using GUI Tools

**Connection details:**
- **Host:** localhost
- **Port:** 5432
- **Database:** powersolar
- **Username:** powersolar
- **Password:** powersolar_dev_password

**Recommended GUI tools:**
- [pgAdmin](https://www.pgadmin.org/)
- [DBeaver](https://dbeaver.io/)
- [TablePlus](https://tableplus.com/)
- [Postico](https://eggerapps.at/postico/) (Mac)

---

## Production Setup

### Environment Variables for Production

```env
DB_TYPE=postgres
DB_HOST=your-production-db-host.com
DB_PORT=5432
DB_USERNAME=powersolar_prod
DB_PASSWORD=STRONG_SECURE_PASSWORD
DB_NAME=powersolar_production
DB_SSL=true
DB_SYNCHRONIZE=false  # IMPORTANT: Turn off in production!
DB_LOGGING=false
```

### Managed PostgreSQL Providers

**Recommended options (all have free tiers):**

1. **Railway** (Easy, generous free tier)
   - https://railway.app/
   - One-click PostgreSQL
   - $5/month after free tier

2. **Render** (Good for small projects)
   - https://render.com/
   - Free tier with 90-day expiry
   - $7/month paid

3. **Supabase** (PostgreSQL + extras)
   - https://supabase.com/
   - Free tier: 500MB database
   - Includes auth, storage, realtime

4. **Heroku**
   - Classic choice
   - Free tier discontinued
   - $5/month minimum

5. **DigitalOcean**
   - Managed PostgreSQL
   - $15/month minimum
   - Very reliable

---

## Database Migrations

### Generate Migration (when changing entities)

```bash
cd apps/backend
pnpm migration:generate src/migrations/NameOfMigration
```

### Run Migrations (production)

```bash
cd apps/backend
pnpm migration:run
```

### Revert Migration

```bash
cd apps/backend
pnpm migration:revert
```

---

## Troubleshooting

### "Port 5432 already in use"
Another PostgreSQL instance is running:
```bash
# Find the process
lsof -i :5432

# Stop system PostgreSQL (if installed)
brew services stop postgresql
# OR
sudo systemctl stop postgresql
```

### "Connection refused"
Docker container not running:
```bash
docker-compose up -d
docker-compose logs postgres
```

### "Password authentication failed"
Check your .env file matches docker-compose.yml credentials.

### Reset Everything
```bash
# Stop and remove all data
docker-compose down -v

# Start fresh
docker-compose up -d
pnpm dev
```

---

## Backup & Restore

### Backup Database
```bash
docker exec powersolar-postgres pg_dump -U powersolar powersolar > backup.sql
```

### Restore Database
```bash
docker exec -i powersolar-postgres psql -U powersolar powersolar < backup.sql
```

### Backup with timestamp
```bash
docker exec powersolar-postgres pg_dump -U powersolar powersolar > backup_$(date +%Y%m%d_%H%M%S).sql
```

---

## Performance Tips

### Monitor Connection Count
```sql
SELECT count(*) FROM pg_stat_activity;
```

### Find Slow Queries
```sql
SELECT pid, now() - pg_stat_activity.query_start AS duration, query 
FROM pg_stat_activity 
WHERE state = 'active' 
ORDER BY duration DESC;
```

### Database Size
```sql
SELECT pg_size_pretty(pg_database_size('powersolar'));
```

---

## Development vs Production

| Setting | Development | Production |
|---------|-------------|------------|
| DB_SYNCHRONIZE | true | false |
| DB_LOGGING | true | false |
| DB_SSL | false | true |
| Backups | Manual | Automated daily |
| Connection Pool | Default | Optimized |

**IMPORTANT:** Never use `DB_SYNCHRONIZE=true` in production! It can cause data loss. Always use migrations in production.

