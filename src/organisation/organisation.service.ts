import { Injectable } from '@nestjs/common';
import { Organisation } from './organisation.model';
import { Capability, Role } from 'src/models/user.model';

@Injectable()
export class OrganisationService {
  private readonly nbOrganisation = 10;

  private organisations: Organisation[] = [
    ...Array(this.nbOrganisation).keys(),
  ].map((i) => this.generateRandomOrganisation(i));

  getOrganisations(): Organisation[] {
    return this.organisations;
  }

  getOrganisationsByMemberId(memberId: string): Organisation[] {
    return this.organisations.filter((f) =>
      f.members.map((c) => c.id).includes(memberId),
    );
  }

  createOrganisation(organisation: Organisation): Organisation {
    this.organisations.push(organisation);
    return organisation;
  }

  updateOrganisation(organisationToUpdate: Organisation) {
    let foundOrganisation = this.organisations.find(
      (c) => c.id === organisationToUpdate.id,
    );
    if (foundOrganisation) {
      foundOrganisation = { ...organisationToUpdate };
    }
  }

  deleteOrganisation(idOrganisationToDelete: string) {
    this.organisations = this.organisations.filter(
      (c) => c.id !== idOrganisationToDelete,
    );
  }

  private generateRandomOrganisation(index: number): Organisation {
    const odd = index % 2 === 0;
    return {
      id: crypto.randomUUID(),
      members: [
        {
          id: crypto.randomUUID(),
          capabilities: [Capability.WRITE, Capability.READ],
          name: odd ? 'cedric duperron' : 'yann celenice',
          mail: odd ? 'cedric.duperron@gmail.com' : 'yann.celenice@gmail.com',
          password: 'password',
          organisations: [],
          role: Role.SUPER_ADMIN,
          phone: '0658486128',
        },
      ],
      name: 'Super corp' + index,
    };
  }
}
