import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { SolarProject } from './solar-project.entity';

@Entity('project_images')
export class ProjectImage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  url: string;

  @Column()
  alt: string;

  @Column({ nullable: true })
  caption?: string;

  @Column({ default: false })
  isPrimary: boolean;

  @Column({ default: 0 })
  order: number;

  @ManyToOne(() => SolarProject, (project) => project.images, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'projectId' })
  project: SolarProject;

  @Column()
  projectId: string;
}

