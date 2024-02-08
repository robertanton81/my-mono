import { Injectable } from '@nestjs/common';

@Injectable()
export class SecondAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
