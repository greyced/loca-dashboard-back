import { Controller, Get } from '@nestjs/common';
import { VisitsService } from './visits.service';
import { Visit } from './visit.model';

@Controller('visits')
export class VisitsController {
  constructor(private readonly visitsService: VisitsService) {}

  @Get()
  findAll(): Visit[] {
    return this.visitsService.getVisits();
  }
}
