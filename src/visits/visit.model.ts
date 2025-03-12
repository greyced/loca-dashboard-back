import { User } from 'src/models/user.model';
import { RealEstate } from 'src/real-estate/real-estate.model';

export interface Visit {
  id: string;
  date: { seconds: number };
  nbVisits: number;
  nbVisitsWithFiber: number;
  nbAppointmentsMade: number;
  nbLeadConversion: number;
  averageDuration: number;
}

export interface DetailedVisit {
  id: string;
  date: { seconds: number };
  duration: number;
  user: User;
  realEstate: RealEstate;
}
