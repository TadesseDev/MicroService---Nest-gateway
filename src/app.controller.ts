import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { createOrderDTO } from './create-order-dto';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createOrder(@Body() createOrderDTO: createOrderDTO): string {
    return this.appService.createOrder(createOrderDTO);
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
