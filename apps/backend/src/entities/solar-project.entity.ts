import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { ProjectType } from '@powersolar/shared-types';
import { ProjectImage } from './project-image.entity';

@Entity('solar_projects')
export class SolarProject {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column({
    type: 'varchar',
    enum: ['residential-solar', 'commercial-solar', 'solar-maintenance', 'battery-storage'],
  })
  projectType: ProjectType;

  @Column()
  location: string;

  @Column()
  systemSize: string; // e.g., "4.2 kWp"

  @Column({ type: 'date' })
  completionDate: Date;

  @Column({
    type: 'varchar',
    enum: ['residential', 'commercial'],
  })
  customerType: 'residential' | 'commercial';

  @OneToMany(() => ProjectImage, (image) => image.project, { eager: true })
  images: ProjectImage[];

  // Testimonial fields (optional)
  @Column({ nullable: true })
  testimonialCustomerName?: string;

  @Column({ nullable: true })
  testimonialLocation?: string;

  @Column({ type: 'integer', nullable: true })
  testimonialRating?: number; // 1-5

  @Column({ type: 'text', nullable: true })
  testimonialComment?: string;

  @Column({ nullable: true })
  testimonialBillSavings?: string; // e.g., "85% reduction"

  @Column({ default: false })
  featured: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

