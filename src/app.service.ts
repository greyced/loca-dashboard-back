import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getVisits(): any[] {
    return [
      { 
        code: 'OIL',
        name: 'cedric'
      }
    ];
  }
}
