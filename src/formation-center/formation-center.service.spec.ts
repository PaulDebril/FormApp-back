import { Test, TestingModule } from '@nestjs/testing';
import { FormationCenterService } from './formation-center.service';

describe('FormationCenterService', () => {
  let service: FormationCenterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormationCenterService],
    }).compile();

    service = module.get<FormationCenterService>(FormationCenterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
