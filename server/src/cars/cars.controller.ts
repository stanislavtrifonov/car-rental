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
  
import { CarsService } from './cars.service';
import { Car } from '../database/entities/car.entity';


@Controller('cars')
export class CarsController {
    public constructor(private readonly carsService: CarsService) { }

    @Get('/available')
    @HttpCode(HttpStatus.OK)
    public async getAllAvailableCars () {
      const allAvailableCars: Car[] = await this.carsService.getAllAvailableCars();

      return allAvailableCars;
    }
}
