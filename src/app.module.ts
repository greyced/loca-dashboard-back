import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VisitsController } from './visits/visits.controller';
import { VisitsService } from './visits/visits.service';

@Module({
  imports: [],
  controllers: [AppController, VisitsController],
  providers: [AppService, VisitsService],
})
export class AppModule {}
