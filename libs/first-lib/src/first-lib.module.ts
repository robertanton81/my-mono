import { Module } from '@nestjs/common';
import { FirstLibService } from './first-lib.service';

@Module({
  providers: [FirstLibService],
  exports: [FirstLibService],
})
export class FirstLibModule {}
