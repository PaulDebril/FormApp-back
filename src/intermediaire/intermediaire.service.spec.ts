import { Test, TestingModule } from '@nestjs/testing';
import { IntermediaireService } from './intermediaire.service';

describe('IntermediaireService', () => {
  let service: IntermediaireService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IntermediaireService],
    }).compile();

    service = module.get<IntermediaireService>(IntermediaireService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
