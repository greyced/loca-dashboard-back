import { Controller, Get } from '@nestjs/common';
import { RealEstate } from './real-estate.model';
import { RealEstateService } from './real-estate.service';

@Controller('real-estate')
export class RealEstateController {
  constructor(private readonly realEstateService: RealEstateService) {}

  @Get()
  findAll(): RealEstate[] {
    return this.realEstateService.getRealEstates();
  }
}
