import {
  IsString,
  IsEmail,
  IsEnum,
  IsOptional,
  IsNotEmpty,
  Matches,
  MinLength,
  MaxLength,
} from 'class-validator';
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
} from '@powersolar/shared-types';

export class CreateSolarLeadDto {
  // Contact Information
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(100)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[A-Z0-9]{3}\s?[A-Z0-9]{4}$/i, {
    message: 'Invalid Eircode format. Must be in format: A65 F4E2',
  })
  eircode: string;

  // Property Details
  @IsEnum(['detached', 'semi-detached', 'terraced', 'apartment', 'commercial'])
  propertyType: PropertyType;

  @IsEnum(['pitched', 'flat', 'mixed'])
  roofType: RoofType;

  @IsEnum(['south', 'east', 'west', 'north', 'mixed', 'unknown'])
  roofOrientation: RoofOrientation;

  // Energy & System Details
  @IsEnum(['under-3000', '3000-5000', '5000-8000', 'over-8000', 'unknown'])
  currentElectricityUsage: ElectricityUsageRange;

  @IsEnum(['2-3-kwp', '3-4-kwp', '4-6-kwp', 'over-6-kwp', 'not-sure'])
  interestedSystemSize: SystemSizeRange;

  @IsEnum(['eligible', 'not-eligible', 'unsure'])
  seaiGrantEligibility: SeaiGrantEligibility;

  @IsEnum(['asap', '1-3-months', '3-6-months', 'over-6-months', 'just-exploring'])
  installationTimeframe: InstallationTimeframe;

  // Contact Preferences & Additional Info
  @IsEnum(['email', 'phone', 'whatsapp'])
  preferredContact: PreferredContactMethod;

  @IsString()
  @IsOptional()
  @MaxLength(1000)
  additionalNotes?: string;

  // Project Classification
  @IsEnum(['residential-solar', 'commercial-solar', 'solar-maintenance', 'battery-storage'])
  projectType: ProjectType;

  // Lead Source (set by system)
  @IsEnum(['quote-form', 'phone', 'whatsapp', 'referral', 'website'])
  @IsOptional()
  source?: LeadSource;
}

