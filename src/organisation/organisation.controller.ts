import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Organisation } from './organisation.model';
import { OrganisationService } from './organisation.service';

@Controller('organisation')
export class OrganisationController {
  constructor(private readonly organisationService: OrganisationService) {}

  @Get()
  findAll(): Organisation[] {
    return this.organisationService.getOrganisations();
  }

  @Post()
  create(organisation: Organisation): Organisation {
    return this.organisationService.createOrganisation(organisation);
  }

  @Put()
  update(organisation: Organisation): void {
    return this.organisationService.updateOrganisation(organisation);
  }

  @Delete()
  delete(organisationId: string): void {
    return this.organisationService.deleteOrganisation(organisationId);
  }
}
