/**
 * Power Solar Configuration Types
 * 
 * Type definitions for all configuration objects used throughout the application.
 */

export type Environment =
  | 'development'
  | 'test'
  | 'staging'
  | 'production';

export interface DatabaseConfig {
  type: 'postgres' | 'sqlite';
  host?: string;
  port?: number;
  username?: string;
  password?: string;
  database: string;
  ssl?: boolean;
  synchronize: boolean;
  logging: boolean;
  migrationsRun?: boolean;
}

export interface AppConfig {
  port: number;
  environment: Environment;
  nodeEnv: string;
  corsOrigins: string[];
  apiPrefix: string;
  globalPrefix: string;
  rateLimitMax: number;
  rateLimitWindowMs: number;
}

export interface SecurityConfig {
  jwtSecret: string;
  jwtExpiresIn: string;
  bcryptRounds: number;
}

export interface LoggingConfig {
  level: 'error' | 'warn' | 'info' | 'debug' | 'verbose';
  enableConsole: boolean;
  enableFile: boolean;
}

export interface MonitoringConfig {
  enableMetrics: boolean;
  enableHealthCheck: boolean;
  sentryDsn?: string;
}

export interface CompanyConfig {
  name: string;
  phone: string;
  email?: string;
  address: string;
  eircode: string;
  serviceAreas: string[];
}

export interface ConfigValidationResult {
  isValid: boolean;
  errors: string[];
  missing: string[];
}

export interface EnvironmentVariableDefinition {
  key: string;
  description: string;
  required: boolean;
  defaultValue?: string;
  type: 'string' | 'number' | 'boolean' | 'array';
  validation?: {
    enum?: string[];
    min?: number;
    max?: number;
    pattern?: RegExp;
  };
  sensitive: boolean;
  category: string;
}

export interface ConfigGenerationOptions {
  overwrite?: boolean;
  includeComments?: boolean;
  includeDefaults?: boolean;
}

