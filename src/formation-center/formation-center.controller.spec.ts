import { Test, TestingModule } from '@nestjs/testing';
import { FormationCenterController } from './formation-center.controller';
import { FormationCenterService } from './formation-center.service';

describe('FormationCenterController', () => {
  let controller: FormationCenterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormationCenterController],
      providers: [FormationCenterService],
    }).compile();

    controller = module.get<FormationCenterController>(
      FormationCenterController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
