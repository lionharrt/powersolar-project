import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PowerSolarConfigModule } from './config/config.module';
import { LeadsModule } from './modules/leads/leads.module';
import { AuthModule } from './modules/auth/auth.module';
import { CompanyModule } from './modules/company/company.module';
import { SettingsModule } from './modules/settings/settings.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { DatabaseConfig } from './config/config.types';

@Module({
  imports: [
    PowerSolarConfigModule,
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const dbConfig = configService.get<DatabaseConfig>('database');
        const dbType = dbConfig?.type || 'sqlite';
        const isDevelopment = process.env.NODE_ENV === 'development';

        console.log(
          `🔌 Connecting to ${dbType} database: ${dbConfig?.database}`,
        );

        const baseConfig = {
          type: dbType,
          synchronize: dbConfig?.synchronize,
          logging: dbConfig?.logging,
          entities: isDevelopment
            ? [__dirname + '/**/*.entity{.ts,.js}']
            : [__dirname + '/**/*.entity.js'],
          migrations: isDevelopment ? [] : [__dirname + '/migrations/*.js'],
        };

        if (dbType === 'sqlite') {
          return {
            ...baseConfig,
            type: 'sqlite' as const,
            database: dbConfig?.database,
          };
        } else {
          return {
            ...baseConfig,
            type: 'postgres' as const,
            host: dbConfig?.host,
            port: dbConfig?.port,
            username: dbConfig?.username,
            password: dbConfig?.password,
            database: dbConfig?.database,
            ssl: dbConfig?.ssl,
          };
        }
      },
    }),
    AuthModule,
    LeadsModule,
    CompanyModule,
    SettingsModule,
    NotificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

