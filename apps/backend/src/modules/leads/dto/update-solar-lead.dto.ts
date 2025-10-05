import { PartialType } from '@nestjs/mapped-types';
import { CreateSolarLeadDto } from './create-solar-lead.dto';
import { IsEnum, IsOptional } from 'class-validator';
import { LeadStatus } from '@powersolar/shared-types';

export class UpdateSolarLeadDto extends PartialType(CreateSolarLeadDto) {
  @IsEnum([
    'new',
    'contacted',
    'site-survey-scheduled',
    'site-survey-completed',
    'quoted',
    'approved',
    'installation-scheduled',
    'installed',
    'lost',
  ])
  @IsOptional()
  status?: LeadStatus;
}

