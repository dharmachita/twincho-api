import { Test, TestingModule } from '@nestjs/testing';
import { TwinchsService } from '../twinchs.service';

describe('TwinchsService', () => {
  let service: TwinchsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TwinchsService],
    }).compile();

    service = module.get<TwinchsService>(TwinchsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
