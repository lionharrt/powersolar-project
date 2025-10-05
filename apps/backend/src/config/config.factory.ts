/**
 * Power Solar Configuration Factory
 *
 * Configuration factory functions that load and structure configuration values
 * from environment variables into typed configuration objects.
 */

import { registerAs } from '@nestjs/config';
import {
  AppConfig,
  DatabaseConfig,
  SecurityConfig,
  LoggingConfig,
  MonitoringConfig,
  CompanyConfig,
} from './config.types';

export const appConfig = registerAs(
  'app',
  (): AppConfig => ({
    port: parseInt(process.env.PORT || '3001', 10),
    environment: (process.env.NODE_ENV as any) || 'development',
    nodeEnv: process.env.NODE_ENV || 'development',
    corsOrigins: process.env.CORS_ORIGINS?.split(',').map((origin) =>
      origin.trim(),
    ) || ['http://localhost:5173'],
    apiPrefix: process.env.API_PREFIX || 'api',
    globalPrefix: process.env.API_PREFIX || 'api',
    rateLimitMax: parseInt(process.env.RATE_LIMIT_MAX || '100', 10),
    rateLimitWindowMs: parseInt(
      process.env.RATE_LIMIT_WINDOW_MS || '900000',
      10,
    ), // 15 minutes default
  }),
);

export const databaseConfig = registerAs(
  'database',
  (): DatabaseConfig => {
    const dbType = (process.env.DB_TYPE || 'sqlite') as 'postgres' | 'sqlite';

    if (dbType === 'sqlite') {
      return {
        type: 'sqlite',
        database: process.env.DB_NAME || 'powersolar.db',
        synchronize: process.env.DB_SYNCHRONIZE === 'true',
        logging: process.env.DB_LOGGING === 'true',
      };
    }

    return {
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME || 'powersolar',
      ssl: process.env.DB_SSL === 'true',
      synchronize: process.env.DB_SYNCHRONIZE === 'true',
      logging: process.env.DB_LOGGING === 'true',
      migrationsRun: process.env.DB_MIGRATIONS_RUN === 'true',
    };
  },
);

export const securityConfig = registerAs(
  'security',
  (): SecurityConfig => ({
    jwtSecret: process.env.JWT_SECRET || 'power-solar-dev-secret-change-in-production',
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
    bcryptRounds: parseInt(process.env.BCRYPT_ROUNDS || '12', 10),
  }),
);

export const loggingConfig = registerAs(
  'logging',
  (): LoggingConfig => ({
    level: (process.env.LOG_LEVEL as any) || 'info',
    enableConsole: process.env.LOG_ENABLE_CONSOLE !== 'false',
    enableFile: process.env.LOG_ENABLE_FILE === 'true',
  }),
);

export const monitoringConfig = registerAs(
  'monitoring',
  (): MonitoringConfig => ({
    enableMetrics: process.env.ENABLE_METRICS === 'true',
    enableHealthCheck: process.env.ENABLE_HEALTH_CHECK !== 'false',
    sentryDsn: process.env.SENTRY_DSN,
  }),
);

export const companyConfig = registerAs(
  'company',
  (): CompanyConfig => ({
    name: process.env.COMPANY_NAME || 'Power Solar',
    phone: process.env.COMPANY_PHONE || '087-0644982',
    email: process.env.COMPANY_EMAIL,
    address: process.env.COMPANY_ADDRESS || '5 Russell Close, Gracefield Manor, Ballylinan, Co. Laois',
    eircode: process.env.COMPANY_EIRCODE || 'R14FH59',
    serviceAreas: process.env.COMPANY_SERVICE_AREAS?.split(',').map(a => a.trim()) || [
      'Dublin',
      'Leinster',
      'Kildare',
      'Meath',
      'Wicklow',
      'Louth'
    ],
  }),
);

