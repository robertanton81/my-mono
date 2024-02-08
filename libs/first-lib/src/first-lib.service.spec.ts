import { Test, TestingModule } from '@nestjs/testing';
import { FirstLibService } from './first-lib.service';

describe('FirstLibService', () => {
  let service: FirstLibService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FirstLibService],
    }).compile();

    service = module.get<FirstLibService>(FirstLibService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
