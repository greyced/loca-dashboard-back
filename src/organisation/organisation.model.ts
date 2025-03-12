import { User } from 'src/models/user.model';

export interface Organisation {
  id: string;
  name: string;
  members: User[];
}
