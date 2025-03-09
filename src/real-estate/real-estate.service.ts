import { Injectable } from '@nestjs/common';
import { RealEstate } from './real-estate.model';

@Injectable()
export class RealEstateService {
  private readonly nbOfDays = 10;

  getRealEstates(): RealEstate[] {
    return [...Array(this.nbOfDays).keys()].map((i) =>
      this.generateRandomRealEstate(i),
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
