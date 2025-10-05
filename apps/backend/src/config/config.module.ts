/**
 * Power Solar Configuration Module
 * 
 * Provides type-safe configuration management for the NestJS application.
 */

import { Module, Global } from '@nestjs/common';
import { ConfigModule as NestConfigModule, ConfigService } from '@nestjs/config';
import { configValidationSchema } from './config.validation';
import {
  appConfig,
  databaseConfig,
  securityConfig,
  loggingConfig,
  monitoringConfig,
  companyConfig,
} from './config.factory';

@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        `.env.${process.env.NODE_ENV || 'development'}`,
        '.env.local',
        '.env'
      ],
      load: [
        appConfig,
        databaseConfig,
        securityConfig,
        loggingConfig,
        monitoringConfig,
        companyConfig,
      ],
      validationSchema: configValidationSchema,
      validationOptions: {
        allowUnknown: true,
        abortEarly: false,
      },
      expandVariables: true,
      cache: true,
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class PowerSolarConfigModule {}

