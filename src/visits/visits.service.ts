import { Injectable } from '@nestjs/common';
import { DetailedVisit, Visit } from './visit.model';
import { Capability, Role } from 'src/models/user.model';

@Injectable()
export class VisitsService {
  private readonly nbOfDays = 10;

  getVisits({ from, to }: { from: number; to: number }): Visit[] {
    return [...Array(this.nbOfDays).keys()]
      .map((i) => this.generateRandomVisit(i))
      .filter((v) => this.filterVisit(v, { from, to }));
  }

  getVisitsDetails({
    from,
    to,
  }: {
    from: number;
    to: number;
  }): DetailedVisit[] {
    return [...Array(this.nbOfDays).keys()]
      .map((i) => this.generateRandomDetailedVisit(i))
      .filter((v) => this.filterVisit(v, { from, to }));
  }

  private filterVisit(
    visit: Visit | DetailedVisit,
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

  private generateRandomDetailedVisit(index: number): DetailedVisit {
    const odd = index % 2 === 0;
    return {
      id: crypto.randomUUID(),
      date: { seconds: this.getIncrementedSeconds(index + 1) },
      duration: 120 + index * Math.random() * 100,
      realEstate: {
        id: crypto.randomUUID(),
        description: 'super description',
        livingArea: odd ? 50 : 30,
        numberOfPieces: odd ? 3 : 2,
        ownerId: crypto.randomUUID(),
        price: 50 + index,
        title: 'super title',
        totalArea: odd ? 55 : 35,
      },
      user: {
        id: crypto.randomUUID(),
        capabilities: [Capability.WRITE, Capability.READ],
        name: odd ? 'cedric duperron' : 'yann celenice',
        mail: odd ? 'cedric.duperron@gmail.com' : 'yann.celenice@gmail.com',
        password: 'password',
        organisations: [],
        role: Role.SUPER_ADMIN,
        phone: '0658487676',
      },
    };
  }

  private getIncrementedSeconds(dayToAdd: number): number {
    const dayToIncrement = new Date();
    dayToIncrement.setDate(dayToIncrement.getDate() - this.nbOfDays);
    dayToIncrement.setDate(dayToIncrement.getDate() + dayToAdd);
    return Math.round(dayToIncrement.getTime() / 1000);
  }
}
