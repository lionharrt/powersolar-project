import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationEvent } from '../../entities/notification-event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NotificationEvent])],
})
export class NotificationsModule {}

