# Power Solar - Deployment Guide

## 🚀 Google Cloud Platform & Firebase Deployment

### ✅ Setup Complete

- ✅ GCloud Project Created: `powersolar-ie`
- ✅ GCloud Account: `dylanmahony@hotmail.com`
- ✅ GitHub Repository: https://github.com/lionharrt/powersolar-project
- ✅ Initial Commit: Complete with full project structure

---

## 📋 Next Steps (Manual Configuration Required)

### 1. Enable Billing (Required First)

**You need to attach a billing account to enable Cloud Run:**

```bash
# Open GCloud Console to set up billing
open https://console.cloud.google.com/billing/linkedaccount?project=powersolar-ie
```

**Or via Console:**
1. Go to: https://console.cloud.google.com/
2. Select project: `powersolar-ie`
3. Go to "Billing" in the menu
4. Link a billing account

**After billing is enabled, run:**
```bash
gcloud services enable run.googleapis.com cloudbuild.googleapis.com
```

---

### 2. Firebase Setup

**Initialize Firebase in the project:**

```bash
# Login to Firebase (should already be logged in)
firebase login

# Initialize Firebase
firebase init

# Select:
# ✓ Hosting: Configure files for Firebase Hosting
# ✓ Use existing project: powersolar-ie
# Public directory: apps/frontend/dist
# Single-page app: Yes
# Set up automatic builds with GitHub: Yes (optional)
```

---

### 3. Cloud SQL (PostgreSQL)

**Option A: Cloud SQL (Recommended for Production)**

```bash
# Create Cloud SQL instance
gcloud sql instances create powersolar-db \
  --database-version=POSTGRES_16 \
  --tier=db-f1-micro \
  --region=europe-west1

# Create database
gcloud sql databases create powersolar \
  --instance=powersolar-db

# Create user
gcloud sql users create powersolar \
  --instance=powersolar-db \
  --password=SECURE_PASSWORD_HERE
```

**Option B: Managed PostgreSQL (Easier)**
- Supabase: https://supabase.com/ (Free tier)
- Railway: https://railway.app/ (Easy setup)
- Render: https://render.com/ ($7/month)

---

## 🚢 Backend Deployment (Cloud Run)

### Build & Deploy Backend

```bash
# Navigate to backend
cd apps/backend

# Build Docker image
gcloud builds submit --tag gcr.io/powersolar-ie/powersolar-backend

# Deploy to Cloud Run
gcloud run deploy powersolar-backend \
  --image gcr.io/powersolar-ie/powersolar-backend \
  --platform managed \
  --region europe-west1 \
  --allow-unauthenticated \
  --set-env-vars="NODE_ENV=production" \
  --set-env-vars="DB_TYPE=postgres" \
  --set-env-vars="DB_HOST=YOUR_DB_HOST" \
  --set-env-vars="DB_PORT=5432" \
  --set-env-vars="DB_USERNAME=powersolar" \
  --set-env-vars="DB_PASSWORD=YOUR_DB_PASSWORD" \
  --set-env-vars="DB_NAME=powersolar" \
  --set-env-vars="DB_SSL=true" \
  --set-env-vars="DB_SYNCHRONIZE=false" \
  --set-env-vars="JWT_SECRET=YOUR_SECURE_JWT_SECRET" \
  --set-env-vars="CORS_ORIGINS=https://powersolar.ie"
```

### Backend Dockerfile (Create if needed)

Create `apps/backend/Dockerfile`:
```dockerfile
FROM node:18-alpine AS builder

WORKDIR /app

# Copy workspace files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages/shared-types ./packages/shared-types
COPY apps/backend ./apps/backend

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build shared types
RUN cd packages/shared-types && pnpm build

# Build backend
RUN cd apps/backend && pnpm build

# Production image
FROM node:18-alpine

WORKDIR /app

# Copy built files
COPY --from=builder /app/apps/backend/dist ./dist
COPY --from=builder /app/apps/backend/node_modules ./node_modules
COPY --from=builder /app/apps/backend/package.json ./

# Expose port
EXPOSE 8080

# Start server
CMD ["node", "dist/main.js"]
```

---

## 🌐 Frontend Deployment (Firebase Hosting)

### Build & Deploy Frontend

```bash
# Build frontend
cd apps/frontend
pnpm build

# Update .env for production API URL
# VITE_API_URL=https://powersolar-backend-XXXX-ew.a.run.app/api

# Deploy to Firebase
firebase deploy --only hosting
```

### Firebase Configuration

Create `firebase.json` in root:
```json
{
  "hosting": {
    "public": "apps/frontend/dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(js|css)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000"
          }
        ]
      }
    ]
  }
}
```

---

## 🔐 Environment Variables

### Production Backend (.env for Cloud Run)

```env
NODE_ENV=production
PORT=8080
API_PREFIX=api
CORS_ORIGINS=https://powersolar.ie,https://www.powersolar.ie

# Database
DB_TYPE=postgres
DB_HOST=your-production-db-host.com
DB_PORT=5432
DB_USERNAME=powersolar
DB_PASSWORD=SECURE_PASSWORD
DB_NAME=powersolar
DB_SSL=true
DB_SYNCHRONIZE=false
DB_LOGGING=false

# Security
JWT_SECRET=GENERATE_SECURE_32_CHAR_SECRET
JWT_EXPIRES_IN=7d
BCRYPT_ROUNDS=12

# Company Info
COMPANY_NAME=Power Solar
COMPANY_PHONE=087-0644982
COMPANY_EMAIL=info@powersolar.ie
COMPANY_ADDRESS=5 Russell Close, Gracefield Manor, Ballylinan, Co. Laois
COMPANY_EIRCODE=R14FH59
COMPANY_SERVICE_AREAS=Dublin,Leinster,Kildare,Meath,Wicklow,Louth,Laois,Wexford,Carlow
```

### Production Frontend (.env)

```env
VITE_API_URL=https://powersolar-backend-XXXX-ew.a.run.app/api
VITE_APP_NAME=Power Solar
VITE_DEFAULT_LANGUAGE=en
```

---

## 🔄 Continuous Deployment

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GCloud

on:
  push:
    branches: [main]

jobs:
  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Cloud SDK
        uses: google-github-actions/setup-gcloud@v1
        with:
          project_id: powersolar-ie
          service_account_key: ${{ secrets.GCP_SA_KEY }}
          
      - name: Build and Deploy Backend
        run: |
          gcloud builds submit --tag gcr.io/powersolar-ie/powersolar-backend apps/backend
          gcloud run deploy powersolar-backend \
            --image gcr.io/powersolar-ie/powersolar-backend \
            --platform managed \
            --region europe-west1

  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          
      - name: Install pnpm
        run: npm install -g pnpm
        
      - name: Install and Build
        run: |
          pnpm install
          cd packages/shared-types && pnpm build
          cd ../../apps/frontend && pnpm build
          
      - name: Deploy to Firebase
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          projectId: powersolar-ie
```

---

## 📊 Monitoring & Logs

### Cloud Run Logs
```bash
# View backend logs
gcloud run services logs read powersolar-backend --region europe-west1

# Follow logs
gcloud run services logs tail powersolar-backend --region europe-west1
```

### Firebase Hosting Logs
```bash
firebase hosting:channel:list
firebase hosting:channel:deploy preview
```

---

## 🌍 Custom Domain Setup

### For Firebase Hosting (Frontend)

```bash
# Add custom domain
firebase hosting:channel:create production
firebase hosting:sites:list

# Follow instructions in console:
# https://console.firebase.google.com/project/powersolar-ie/hosting
```

### For Cloud Run (Backend API)

```bash
# Map custom domain
gcloud run domain-mappings create \
  --service powersolar-backend \
  --domain api.powersolar.ie \
  --region europe-west1
```

---

## ✅ Deployment Checklist

- [ ] Enable billing on GCloud project
- [ ] Enable required APIs (Cloud Run, Cloud Build, Firebase)
- [ ] Set up PostgreSQL database (Cloud SQL or managed service)
- [ ] Create backend Dockerfile
- [ ] Build and deploy backend to Cloud Run
- [ ] Get backend Cloud Run URL
- [ ] Update frontend .env with API URL
- [ ] Build frontend
- [ ] Initialize Firebase
- [ ] Deploy frontend to Firebase Hosting
- [ ] Configure custom domains (powersolar.ie, api.powersolar.ie)
- [ ] Set up SSL certificates (automatic with Firebase)
- [ ] Test all functionality
- [ ] Set up monitoring and alerts
- [ ] Configure automated backups

---

## 🆘 Troubleshooting

### Cloud Run Issues
- Check logs: `gcloud run services logs read powersolar-backend`
- Verify environment variables are set correctly
- Ensure database connection works
- Check CORS settings

### Firebase Hosting Issues
- Clear cache: `firebase hosting:channel:delete preview`
- Check build output in `apps/frontend/dist`
- Verify API URL in frontend .env

### Database Connection Issues
- Verify Cloud SQL instance is running
- Check connection string format
- Ensure SSL is enabled for production
- Verify firewall rules allow connections

---

## 📞 Support

- GCloud Console: https://console.cloud.google.com/
- Firebase Console: https://console.firebase.google.com/
- GitHub Repository: https://github.com/lionharrt/powersolar-project
- Project: powersolar-ie
- Region: europe-west1 (Ireland)

