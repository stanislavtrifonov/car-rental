import {
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    UseInterceptors,
    Post,
    Body,
    UseGuards,
    ValidationPipe,
    Put,
    Param,
    Delete,
    UsePipes,
  } from '@nestjs/common';
  
import { Car } from '../database/entities/car.entity';
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
}
