import { Injectable } from '@nestjs/common';

@Injectable()
export class FirstLibService {
  getHello(): string {
    return 'Hello from first-lib!';
  }
}
