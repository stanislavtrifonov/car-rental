import { Test, TestingModule } from '@nestjs/testing';
import { ContractsService } from './contracts.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Contract } from '../database/entities/contract.entity';
import { Car } from '../database/entities/car.entity';

describe('ContractsService', () => {
  let service: ContractsService;
  const contractsRepository = {
    find() {
      /* empty */
    },
    findOne() {
      /* empty */
    },
  };

  const carsRepository = {
    findOne() {
      /* empty */
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ContractsService,
        {
          provide: getRepositoryToken(Contract),
          useValue: contractsRepository,
        },
        {
          provide: getRepositoryToken(Car),
          useValue: carsRepository,
        },
      ],
    }).compile();

    service = module.get<ContractsService>(ContractsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
