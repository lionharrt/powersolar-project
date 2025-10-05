/**
 * Power Solar Configuration Validation Schema
 * 
 * Joi validation schema for all configuration variables.
 * Ensures required environment variables are present and valid.
 */

import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  // Application Configuration
  NODE_ENV: Joi.string()
    .valid('development', 'test', 'staging', 'production')
    .default('development'),
  PORT: Joi.number()
    .port()
    .default(3001),
  API_PREFIX: Joi.string()
    .default('api'),
  CORS_ORIGINS: Joi.string()
    .required()
    .description('Comma-separated list of allowed CORS origins'),

  // Database Configuration
  DB_TYPE: Joi.string()
    .valid('postgres', 'sqlite')
    .default('sqlite'),
  DB_HOST: Joi.string()
    .when('DB_TYPE', {
      is: 'postgres',
      then: Joi.required(),
      otherwise: Joi.optional(),
    })
    .description('Database host address (required for PostgreSQL)'),
  DB_PORT: Joi.number()
    .port()
    .default(5432),
  DB_USERNAME: Joi.string()
    .when('DB_TYPE', {
      is: 'postgres',
      then: Joi.required(),
      otherwise: Joi.optional(),
    })
    .description('Database username (required for PostgreSQL)'),
  DB_PASSWORD: Joi.string()
    .when('DB_TYPE', {
      is: 'postgres',
      then: Joi.required(),
      otherwise: Joi.optional(),
    })
    .description('Database password (required for PostgreSQL)'),
  DB_NAME: Joi.string()
    .required()
    .description('Database name'),
  DB_SSL: Joi.boolean()
    .default(false),
  DB_SYNCHRONIZE: Joi.boolean()
    .default(false)
    .description('Auto-synchronize database schema (development only)'),
  DB_LOGGING: Joi.boolean()
    .default(false),
  DB_MIGRATIONS_RUN: Joi.boolean()
    .default(false),

  // Security Configuration
  JWT_SECRET: Joi.string()
    .min(32)
    .required()
    .description('JWT signing secret (minimum 32 characters)'),
  JWT_EXPIRES_IN: Joi.string()
    .default('7d'),
  BCRYPT_ROUNDS: Joi.number()
    .integer()
    .min(8)
    .max(15)
    .default(12),

  // Logging Configuration
  LOG_LEVEL: Joi.string()
    .valid('error', 'warn', 'info', 'debug', 'verbose')
    .default('info'),
  LOG_ENABLE_CONSOLE: Joi.boolean()
    .default(true),
  LOG_ENABLE_FILE: Joi.boolean()
    .default(false),

  // Monitoring Configuration
  ENABLE_METRICS: Joi.boolean()
    .default(false),
  ENABLE_HEALTH_CHECK: Joi.boolean()
    .default(true),
  SENTRY_DSN: Joi.string()
    .uri()
    .allow('')
    .optional()
    .description('Sentry DSN for error tracking'),

  // Company Configuration
  COMPANY_NAME: Joi.string()
    .default('Power Solar'),
  COMPANY_PHONE: Joi.string()
    .default('087-0644982'),
  COMPANY_EMAIL: Joi.string()
    .email()
    .optional(),
  COMPANY_ADDRESS: Joi.string()
    .optional(),
  COMPANY_EIRCODE: Joi.string()
    .optional(),
  COMPANY_SERVICE_AREAS: Joi.string()
    .optional()
    .description('Comma-separated list of service areas'),

  // Rate Limiting
  RATE_LIMIT_MAX: Joi.number()
    .integer()
    .min(1)
    .default(100),
  RATE_LIMIT_WINDOW_MS: Joi.number()
    .integer()
    .min(1000)
    .default(900000), // 15 minutes
});

