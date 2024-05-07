import { Injectable } from '@nestjs/common';
import { CreateAirlineDto } from './dto/create-airline.dto';
import { UpdateAirlineDto } from './dto/update-airline.dto';

@Injectable()
export class AirlineService {
  create(createAirlineDto: CreateAirlineDto) {
    return 'This action adds a new airline';
  }

  findAll() {

    const vuelos = [
      {
        "id": 1,
        "origin": "New York",
        "destination": "Los Angeles",
        "departureTime": "2024-05-08T08:00:00",
        "arrivalTime": "2024-05-08T10:30:00",
        "airline": "Delta",
        "price": 250.00
      },
      {
        "id": 2,
        "origin": "Los Angeles",
        "destination": "Chicago",
        "departureTime": "2024-05-08T11:30:00",
        "arrivalTime": "2024-05-08T14:00:00",
        "airline": "American Airlines",
        "price": 200.00
      },
      {
        "id": 3,
        "origin": "Chicago",
        "destination": "Dallas",
        "departureTime": "2024-05-08T15:30:00",
        "arrivalTime": "2024-05-08T17:30:00",
        "airline": "United Airlines",
        "price": 180.00
      },
      {
        "id": 4,
        "origin": "Dallas",
        "destination": "Miami",
        "departureTime": "2024-05-08T18:45:00",
        "arrivalTime": "2024-05-08T21:15:00",
        "airline": "Southwest Airlines",
        "price": 220.00
      }
    ]
    return {
      data: vuelos,
      status: "",
      message: ""

    };
  }

  findOne(id: number) {

    const reservas = [
      {
        "id": 1,
        "flightId": 1,
        "passengerName": "John Doe",
        "passengerEmail": "john.doe@example.com",
        "seatNumber": "A12",
        "bookingDate": "2024-05-07T15:30:00",
        "status": "confirmed"
      },
      {
        "id": 2,
        "flightId": 2,
        "passengerName": "Jane Smith",
        "passengerEmail": "jane.smith@example.com",
        "seatNumber": "B7",
        "bookingDate": "2024-05-07T16:45:00",
        "status": "confirmed"
      },
      {
        "id": 3,
        "flightId": 3,
        "passengerName": "Alice Johnson",
        "passengerEmail": "alice.johnson@example.com",
        "seatNumber": "C15",
        "bookingDate": "2024-05-07T17:30:00",
        "status": "pending"
      },
      {
        "id": 4,
        "flightId": 1,
        "passengerName": "Michael Brown",
        "passengerEmail": "michael.brown@example.com",
        "seatNumber": "D3",
        "bookingDate": "2024-05-07T18:15:00",
        "status": "confirmed"
      }
    ]

    return {
      data: reservas,
      status: "",
      message: ""
    };
  }

  update(id: number, updateAirlineDto: UpdateAirlineDto) {
    return `This action updates a #${id} airline`;
  }

  remove(id: number) {
    return `This action removes a #${id} airline`;
  }
}
