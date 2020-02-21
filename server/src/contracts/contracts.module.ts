import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from '../database/entities/car.entity';
import { Class } from '../database/entities/class.entity';
import { Contract } from '../database/entities/contract.entity';
import { ContractsController } from './contracts.controller';
import { ContractsService } from './contracts.service';

@Module({
    imports: [TypeOrmModule.forFeature([Car, Class, Contract])],
    controllers: [ContractsController],
    providers: [ContractsService],
})
export class ContractsModule {}