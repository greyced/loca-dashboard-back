import { Controller, Get, Query } from '@nestjs/common';
import { VisitsService } from './visits.service';
import { DetailedVisit, Visit } from './visit.model';

@Controller('visits')
export class VisitsController {
  constructor(private readonly visitsService: VisitsService) {}

  @Get()
  findAll(@Query('from') from: number, @Query('to') to: number): Visit[] {
    return this.visitsService.getVisits({
      from,
      to,
    });
  }

  @Get('detailed')
  findAllDetails(
    @Query('from') from: number,
    @Query('to') to: number,
  ): DetailedVisit[] {
    return this.visitsService.getVisitsDetails({
      from,
      to,
    });
  }
}
