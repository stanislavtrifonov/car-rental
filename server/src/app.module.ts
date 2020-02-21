import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CarsModule } from './cars/cars.module';
import { ContractsModule } from './contracts/contracts.module';

@Module({
  imports: [DatabaseModule, CarsModule, ContractsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
