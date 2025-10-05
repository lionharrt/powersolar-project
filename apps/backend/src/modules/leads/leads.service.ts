import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SolarLead } from '../../entities/solar-lead.entity';
import { CreateSolarLeadDto } from './dto/create-solar-lead.dto';
import { UpdateSolarLeadDto } from './dto/update-solar-lead.dto';

@Injectable()
export class LeadsService {
  constructor(
    @InjectRepository(SolarLead)
    private readonly leadsRepository: Repository<SolarLead>,
  ) {}

  async create(createLeadDto: CreateSolarLeadDto): Promise<SolarLead> {
    const lead = this.leadsRepository.create({
      ...createLeadDto,
      source: createLeadDto.source || 'quote-form',
      status: 'new',
    });

    return this.leadsRepository.save(lead);
  }

  async findAll(): Promise<SolarLead[]> {
    return this.leadsRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: string): Promise<SolarLead> {
    const lead = await this.leadsRepository.findOne({ where: { id } });
    
    if (!lead) {
      throw new NotFoundException(`Lead with ID ${id} not found`);
    }
    
    return lead;
  }

  async update(id: string, updateLeadDto: UpdateSolarLeadDto): Promise<SolarLead> {
    const lead = await this.findOne(id);
    
    Object.assign(lead, updateLeadDto);
    
    return this.leadsRepository.save(lead);
  }

  async remove(id: string): Promise<void> {
    const lead = await this.findOne(id);
    await this.leadsRepository.remove(lead);
  }

  async findByStatus(status: string): Promise<SolarLead[]> {
    return this.leadsRepository.find({
      where: { status: status as any },
      order: { createdAt: 'DESC' },
    });
  }

  async getStatistics() {
    const total = await this.leadsRepository.count();
    const newLeads = await this.leadsRepository.count({ where: { status: 'new' } });
    const contacted = await this.leadsRepository.count({ where: { status: 'contacted' } });
    const quoted = await this.leadsRepository.count({ where: { status: 'quoted' } });
    const installed = await this.leadsRepository.count({ where: { status: 'installed' } });

    return {
      total,
      newLeads,
      contacted,
      quoted,
      installed,
      conversionRate: total > 0 ? (installed / total) * 100 : 0,
    };
  }
}

