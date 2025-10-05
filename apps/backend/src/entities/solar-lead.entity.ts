import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import {
  PropertyType,
  RoofType,
  RoofOrientation,
  ElectricityUsageRange,
  SystemSizeRange,
  SeaiGrantEligibility,
  InstallationTimeframe,
  PreferredContactMethod,
  ProjectType,
  LeadSource,
  LeadStatus,
} from '@powersolar/shared-types';

@Entity('solar_leads')
export class SolarLead {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // Contact Information
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  eircode: string;

  // Property Details
  @Column({
    type: 'varchar',
    enum: ['detached', 'semi-detached', 'terraced', 'apartment', 'commercial'],
  })
  propertyType: PropertyType;

  @Column({
    type: 'varchar',
    enum: ['pitched', 'flat', 'mixed'],
  })
  roofType: RoofType;

  @Column({
    type: 'varchar',
    enum: ['south', 'east', 'west', 'north', 'mixed', 'unknown'],
  })
  roofOrientation: RoofOrientation;

  // Energy & System Details
  @Column({
    type: 'varchar',
    enum: ['under-3000', '3000-5000', '5000-8000', 'over-8000', 'unknown'],
  })
  currentElectricityUsage: ElectricityUsageRange;

  @Column({
    type: 'varchar',
    enum: ['2-3-kwp', '3-4-kwp', '4-6-kwp', 'over-6-kwp', 'not-sure'],
  })
  interestedSystemSize: SystemSizeRange;

  @Column({
    type: 'varchar',
    enum: ['eligible', 'not-eligible', 'unsure'],
  })
  seaiGrantEligibility: SeaiGrantEligibility;

  @Column({
    type: 'varchar',
    enum: ['asap', '1-3-months', '3-6-months', 'over-6-months', 'just-exploring'],
  })
  installationTimeframe: InstallationTimeframe;

  // Contact Preferences & Additional Info
  @Column({
    type: 'varchar',
    enum: ['email', 'phone', 'whatsapp'],
  })
  preferredContact: PreferredContactMethod;

  @Column({ type: 'text', nullable: true })
  additionalNotes?: string;

  // Project Classification
  @Column({
    type: 'varchar',
    enum: ['residential-solar', 'commercial-solar', 'solar-maintenance', 'battery-storage'],
  })
  projectType: ProjectType;

  // Lead Tracking
  @Column({
    type: 'varchar',
    enum: ['quote-form', 'phone', 'whatsapp', 'referral', 'website'],
  })
  source: LeadSource;

  @Column({
    type: 'varchar',
    enum: [
      'new',
      'contacted',
      'site-survey-scheduled',
      'site-survey-completed',
      'quoted',
      'approved',
      'installation-scheduled',
      'installed',
      'lost',
    ],
    default: 'new',
  })
  status: LeadStatus;

  // Timestamps
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

