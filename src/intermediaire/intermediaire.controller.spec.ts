import { Test, TestingModule } from '@nestjs/testing';
import { IntermediaireController } from './intermediaire.controller';
import { IntermediaireService } from './intermediaire.service';

describe('IntermediaireController', () => {
  let controller: IntermediaireController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IntermediaireController],
      providers: [IntermediaireService],
    }).compile();

    controller = module.get<IntermediaireController>(IntermediaireController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
