import { Injectable } from '@nestjs/common';
import { Organisation } from './organisation.model';

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
    return {
      id: crypto.randomUUID(),
      members: [],
      name: 'Super corp' + index,
    };
  }
}
