import { Module } from '@nestjs/common';
import { AirlineService } from './airline.service';
import { AirlineController } from './airline.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 1433,
      username: 'pruebas',
      password: '123',
      database: 'Airline',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AirlineController],
  providers: [AirlineService],
})
export class AirlineModule { }
