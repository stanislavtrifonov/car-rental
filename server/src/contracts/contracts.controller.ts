import {
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Body,
  } from '@nestjs/common';

import { ContractsService } from './contracts.service';
import { Contract } from '../database/entities/contract.entity';


@Controller('contracts')
export class ContractsController {
    public constructor(private readonly contractsService: ContractsService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    public async getAllAvailableCars () {
      const allContracts: Contract[] = await this.contractsService.getAllContracts();

      return allContracts;
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    public async returnCar(
      @Body() {contractId, carId},
    ): Promise<Contract> {

      return await this.contractsService.returnCar(contractId, carId);
    }
  
}
