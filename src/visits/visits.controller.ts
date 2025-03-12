import { Controller, Get, Query } from '@nestjs/common';
import { VisitsService } from './visits.service';
import { Visit } from './visit.model';

@Controller('visits')
export class VisitsController {
  constructor(private readonly visitsService: VisitsService) {}

  @Get()
  findAll(@Query('from') from: number, @Query('to') to: number): Visit[] {
    return this.visitsService.getVisits({
      from, to
    });
  }
}
