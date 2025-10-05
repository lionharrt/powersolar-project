import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CompanyService {
  constructor(private readonly configService: ConfigService) {}

  getCompanyInfo() {
    return {
      name: this.configService.get('company.name'),
      phone: this.configService.get('company.phone'),
      email: this.configService.get('company.email'),
      address: this.configService.get('company.address'),
      eircode: this.configService.get('company.eircode'),
      serviceAreas: this.configService.get('company.serviceAreas'),
      tagline: 'Family-owned Solar PV Installation Specialists',
      description: 'Premium solar panels with 30-year warranties. Save up to 90% on electricity bills.',
      founded: 2012,
      founders: ['Paddy Hickey', 'Brendan Hickey'],
    };
  }
}

