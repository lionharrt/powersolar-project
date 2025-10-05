import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('notification_events')
export class NotificationEvent {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: string; // e.g., 'new-lead', 'lead-status-change', 'system-alert'

  @Column()
  title: string;

  @Column('text')
  message: string;

  @Column({ type: 'json', nullable: true })
  metadata?: Record<string, any>;

  @Column({ default: false })
  isRead: boolean;

  @Column({ nullable: true })
  userId?: string; // If notification is for specific user

  @Column({ nullable: true })
  relatedEntityId?: string; // e.g., leadId, projectId

  @Column({ nullable: true })
  relatedEntityType?: string; // e.g., 'lead', 'project'

  @CreateDateColumn()
  createdAt: Date;
}

