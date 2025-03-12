import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { RealEstate } from './real-estate.model';
import { RealEstateService } from './real-estate.service';

@Controller('real-estate')
export class RealEstateController {
  constructor(private readonly realEstateService: RealEstateService) {}

  @Get()
  findAll(): RealEstate[] {
    return this.realEstateService.getRealEstates();
  }

  @Post()
  create(realEstate: RealEstate): RealEstate {
    return this.realEstateService.createRealEstate(realEstate);
  }

  @Put()
  update(realEstate: RealEstate): void {
    return this.realEstateService.updateRealEstate(realEstate);
  }

  @Delete()
  delete(realEstateId: string): void {
    return this.realEstateService.deleteRealEstate(realEstateId);
  }
}
