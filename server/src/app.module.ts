import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CarsController } from './cars/cars.controller';
import { CarsService } from './cars/cars.service';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [DatabaseModule, CarsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
