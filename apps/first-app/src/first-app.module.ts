import { Module } from '@nestjs/common';
import { FirstAppController } from './first-app.controller';
import { FirstAppService } from './first-app.service';
import { FirstLibModule } from '@app/first-lib';

@Module({
  imports: [FirstLibModule],
  controllers: [FirstAppController],
  providers: [FirstAppService],
})
export class FirstAppModule {}
