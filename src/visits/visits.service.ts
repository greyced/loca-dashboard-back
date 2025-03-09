import { Injectable } from '@nestjs/common';
import { Visit } from './visit.model';

@Injectable()
export class VisitsService {
  private readonly nbOfDays = 10;

  getVisits({ from, to }: { from: number; to: number }): Visit[] {
    return [...Array(this.nbOfDays).keys()]
      .map((i) => this.generateRandomVisit(i))
      .filter((v) => this.filterVisit(v, { from, to }));
  }

  private filterVisit(
    visit: Visit,
    params: { from: number; to: number },
  ): boolean {
    const { from, to } = params;
    if (!from && !to) {
      return true;
    }
    return from > visit.date.seconds && visit.date.seconds < to;
  }

  private generateRandomVisit(index: number): Visit {
    return {
      id: crypto.randomUUID(),
      averageDuration: Math.round(Math.random() * 10),
      date: { seconds: this.getIncrementedSeconds(index + 1) },
      nbAppointmentsMade: index + 1,
      nbLeadConversion: 5,
      nbVisits: index + 2,
      nbVisitsWithFiber: 2,
    };
  }

  private getIncrementedSeconds(dayToAdd: number): number {
    const dayToIncrement = new Date();
    dayToIncrement.setDate(dayToIncrement.getDate() - this.nbOfDays);
    dayToIncrement.setDate(dayToIncrement.getDate() + dayToAdd);
    return Math.round(dayToIncrement.getTime() / 1000);
  }
}
