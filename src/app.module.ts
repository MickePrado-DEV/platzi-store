import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // A way to register the ConfigModule with a custom configuration.
import * as Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { HttpModule, HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { DatabaseModule } from './database/database.module';

import { environments } from './environments';
import config from './config';
console.log('NODE_ENV: =========== ', process.env.NODE_ENV);
console.log('environments: =========== ', environments[process.env.NODE_ENV]);

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments.dev,
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        API_KEY: Joi.number().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
      }),
    }),
    UsersModule,
    ProductsModule,
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 5 /* A way to register the HttpModule with a custom configuration. */,
      }),
    }),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'TASKS',
      inject: [HttpService],
      useFactory: async (http: HttpService) => {
        const task = await http.get(
          'https://jsonplaceholder.typicode.com/todos',
        );
        const value = Promise.resolve(firstValueFrom(task));
        return value;
      },
    },
  ],
})
export class AppModule {}
