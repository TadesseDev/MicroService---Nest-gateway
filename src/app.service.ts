import { Inject, Injectable } from '@nestjs/common';
import { createOrderDTO } from './create-order-dto';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('API_SERVICE') private readonly client: ClientKafka) {}
  getHello(): string {
    return 'Hello World!';
  }

  createOrder(createOrderDTO: createOrderDTO) {
    console.log(createOrderDTO);
    this.client.emit('create_order', createOrderDTO);
    return ""
  }
}
