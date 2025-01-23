import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getAdvertisement(): string {
    return 'This is an advertisement!';
  }
}
