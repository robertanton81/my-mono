import { Controller, Get } from '@nestjs/common';
import { SecondAppService } from './second-app.service';

@Controller()
export class SecondAppController {
  constructor(private readonly secondAppService: SecondAppService) {}

  @Get()
  getHello(): string {
    return this.secondAppService.getHello();
  }
}
