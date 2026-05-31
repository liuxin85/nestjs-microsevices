import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MICROSERVICES_CLIENTS } from 'src/constants';

@Controller('orders')
export class OrdersController {
  constructor(
    @Inject(MICROSERVICES_CLIENTS.ORDER_SERVICE)
    private orderServiceClient: ClientProxy,
  ) {}

  @Post()
  createOrder(@Body() order: any) {
    return this.orderServiceClient.send('create_order', order);
  }
}
