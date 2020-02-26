import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from '../database/entities/car.entity';
import { Repository } from 'typeorm';
import { Contract } from '../database/entities/contract.entity';
import { NewContractDTO } from './models/newContract.dto';
import { promises } from 'dns';

@Injectable()
export class ContractsService {
    public constructor(
        @InjectRepository(Car) private readonly carsRepository: Repository<Car>,
        @InjectRepository(Contract) private readonly contractsRepository: Repository<Contract>
    ) { }

    public async getAllContracts(): Promise<Contract[]> {
        const allContractsData: Contract[] = await this.contractsRepository.find({
            where: {
                deliveredDate: 'n/a',
                isDeleted: false,
            },
            relations: ['car', 'car.className'],
        });

        return allContractsData;
    }

    public async createContract(body: NewContractDTO, carId): Promise<Contract> {
        const foundCar = await this.carsRepository.findOne({
            where: {
                id: carId
            }
        })

        console.log(body)
        console.log(foundCar)

        const newContract = await this.contractsRepository.create(body)
        newContract.car = Promise.resolve(foundCar)
        const createdContract = await this.contractsRepository.save(newContract)
        console.log(newContract)
        return createdContract;
    }

    public async returnCar(contractId: string, carId: string): Promise<Contract> {
        const foundContract = await this.contractsRepository.findOne({
            where: {
                id: contractId
            }
        })

        const foundCar = await this.carsRepository.findOne({
            where: {
                id: carId
            }
        })

        return foundContract;
    }

}
