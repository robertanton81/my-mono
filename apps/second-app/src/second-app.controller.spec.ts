import { Test, TestingModule } from '@nestjs/testing';
import { SecondAppController } from './second-app.controller';
import { SecondAppService } from './second-app.service';

describe('SecondAppController', () => {
  let secondAppController: SecondAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SecondAppController],
      providers: [SecondAppService],
    }).compile();

    secondAppController = app.get<SecondAppController>(SecondAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(secondAppController.getHello()).toBe('Hello World!');
    });
  });
});
