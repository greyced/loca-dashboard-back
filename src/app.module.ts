import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VisitsController } from './visits/visits.controller';
import { VisitsService } from './visits/visits.service';
import { RealEstateController } from './real-estate/real-estate.controller';
import { RealEstateService } from './real-estate/real-estate.service';

@Module({
  imports: [],
  controllers: [AppController, VisitsController, RealEstateController],
  providers: [AppService, VisitsService, RealEstateService],
})
export class AppModule {}
