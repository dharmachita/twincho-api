import { Test, TestingModule } from '@nestjs/testing';
import { TwinchsController } from '../twinchs.controller';

describe('TwinchsController', () => {
  let controller: TwinchsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TwinchsController],
    }).compile();

    controller = module.get<TwinchsController>(TwinchsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
