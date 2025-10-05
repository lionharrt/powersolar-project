import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Get configuration
  const configService = app.get(ConfigService);
  const port = configService.get<number>('app.port') || 3001;
  const apiPrefix = configService.get<string>('app.apiPrefix') || 'api';
  const corsOrigins = configService.get<string[]>('app.corsOrigins') || ['http://localhost:5173'];
  const environment = configService.get<string>('app.environment') || 'development';
  const companyName = configService.get<string>('company.name') || 'Power Solar';

  // Global prefix for API routes
  app.setGlobalPrefix(apiPrefix);

  // Enable CORS
  app.enableCors({
    origin: corsOrigins,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  await app.listen(port);

  console.log('');
  console.log('═══════════════════════════════════════════════════════');
  console.log(`🌞 ${companyName} API Server Started`);
  console.log('═══════════════════════════════════════════════════════');
  console.log(`🚀 Environment: ${environment}`);
  console.log(`🌐 Server running on: http://localhost:${port}`);
  console.log(`📡 API endpoint: http://localhost:${port}/${apiPrefix}`);
  console.log(`🔗 Health check: http://localhost:${port}/${apiPrefix}/health`);
  console.log(`🎯 CORS enabled for: ${corsOrigins.join(', ')}`);
  console.log('═══════════════════════════════════════════════════════');
  console.log('');
}

bootstrap();

