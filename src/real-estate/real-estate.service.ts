import { Injectable } from '@nestjs/common';
import { RealEstate } from './real-estate.model';

@Injectable()
export class RealEstateService {
  private readonly nbOfDays = 10;

  private realEstates: RealEstate[] = [...Array(this.nbOfDays).keys()].map(
    (i) => this.generateRandomRealEstate(i),
  );

  getRealEstates(): RealEstate[] {
    return this.realEstates;
  }

  createRealEstate(realEstate: RealEstate): RealEstate {
    this.realEstates.push(realEstate);
    return realEstate;
  }

  updateRealEstate(realEstateToUpdate: RealEstate) {
    let foundRealEstate = this.realEstates.find(
      (c) => c.id === realEstateToUpdate.id,
    );
    if (foundRealEstate) {
      foundRealEstate = { ...realEstateToUpdate };
    }
  }

  deleteRealEstate(idRealEstateToDelete: string) {
    this.realEstates = this.realEstates.filter(
      (c) => c.id !== idRealEstateToDelete,
    );
  }

  private generateRandomRealEstate(index: number): RealEstate {
    return {
      id: crypto.randomUUID(),
      description: 'super description',
      livingArea: 50,
      numberOfPieces: 3,
      ownerId: crypto.randomUUID(),
      price: 50 + index,
      title: 'super title',
      totalArea: 50,
    };
  }
}
