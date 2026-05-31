import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const tpcMicroservice =
    await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
      transport: Transport.TCP,
      options: {
        port: 4002,
      },
    });

  const redisMicroservice =
    await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
      transport: Transport.REDIS,
      options: {
        host: 'localhost',
        port: 6379,
      },
    });

  await Promise.all([tpcMicroservice.listen(), redisMicroservice.listen()]);
  // await app.listen();
  console.log('product Microservice is running on port 4002, listen to redis service');
}
bootstrap();
