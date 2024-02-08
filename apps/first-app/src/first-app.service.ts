import { Injectable } from '@nestjs/common';
import { FirstLibService } from '@app/first-lib';

@Injectable()
export class FirstAppService {
  constructor(private firstLibService: FirstLibService) {}

  getHello(): string {
    return this.firstLibService.getHello();
  }
}
