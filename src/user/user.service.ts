import { Injectable } from '@nestjs/common';
import { Capability, Role, User } from 'src/models/user.model';

@Injectable()
export class UserService {
  users: User[] = [
    {
      id: crypto.randomUUID(),
      capabilities: [Capability.WRITE, Capability.READ],
      name: 'yann celenice',
      mail: 'yann.celenice@gmail.com',
      password: 'password',
      organisations: [],
      phone: '0658487676',
      role: Role.ADMIN,
    },
    {
      id: crypto.randomUUID(),
      capabilities: [Capability.WRITE, Capability.READ],
      name: 'cedric duperron',
      mail: 'cedric.duperron@gmail.com',
      password: 'password',
      organisations: [],
      phone: '0658487678',
      role: Role.SUPER_ADMIN,
    },
  ];

  getUser(mail: string, password: string): User | undefined {
    const user = this.users.find(
      (u) => u.mail === mail && u.password === password,
    );
    return user;
  }
}
