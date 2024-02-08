import { Module } from '@nestjs/common';
import { SecondAppController } from './second-app.controller';
import { SecondAppService } from './second-app.service';

@Module({
  imports: [],
  controllers: [SecondAppController],
  providers: [SecondAppService],
})
export class SecondAppModule {}
