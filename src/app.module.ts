import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VisitsController } from './visits/visits.controller';
import { VisitsService } from './visits/visits.service';
import { RealEstateController } from './real-estate/real-estate.controller';
import { RealEstateService } from './real-estate/real-estate.service';
import { NewsController } from './news/news.controller';
import { NewsService } from './news/news.service';
import { OrganisationController } from './organisation/organisation.controller';
import { OrganisationService } from './organisation/organisation.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    VisitsController,
    RealEstateController,
    NewsController,
    OrganisationController,
  ],
  providers: [
    AppService,
    VisitsService,
    RealEstateService,
    NewsService,
    OrganisationService,
  ],
})
export class AppModule {}
