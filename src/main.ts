import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina los datos que no estan definidos en el DTO
      forbidNonWhitelisted: true, // sirve para mandar la alerta sobre los campos que no estan en el DTO
    }), // Para validar los datos que se envian al servidor
  );
  await app.listen(3000);
}
bootstrap();
