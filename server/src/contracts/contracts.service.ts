import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from '../database/entities/car.entity';
import { Repository } from 'typeorm';
import { Class } from '../database/entities/class.entity';
import { Contract } from '../database/entities/contract.entity';

@Injectable()
export class ContractsService {
    public constructor(
        @InjectRepository(Car) private readonly carsRepository: Repository<Car>,
        @InjectRepository(Class) private readonly classesRepository: Repository<Class>,
        @InjectRepository(Contract) private readonly contractsRepository: Repository<Contract>
    ) { }

    public async getAllContracts(): Promise<Contract[]> {
        const allCarsData: Car[] = await this.carsRepository.find({
            where: {
                isBorrowed: false,
                isDeleted: false,
            },
            relations: ['className'],
        });

        return allCarsData;
    }

}
