import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MICROSERVICES_CLIENTS } from './constants';
import { OrdersController } from './orders/orders.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: MICROSERVICES_CLIENTS.USER_SERVICE,
        transport: Transport.TCP,
        options: {
          port: 4003
        }
      },
      {
        name: MICROSERVICES_CLIENTS.PRODUCT_SERVICE,
        transport: Transport.TCP,
        options: {
          port: 4002
        }
      },
      {
        name: MICROSERVICES_CLIENTS.ORDER_SERVICE,
        transport: Transport.TCP,
        options: {
          port: 4001
        }
      },
    ])
  ],
  controllers: [AppController, OrdersController],
  providers: [AppService],
})
export class AppModule {}
