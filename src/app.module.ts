/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { ProductsService } from './services/products/products.service';
import { CategoriesService } from './services/categories/categories.service';

import { CustomersController } from './services/customers/customers.controller';

import { BrandsController } from './controllers/brands/brands.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,

    BrandsController,
    CustomersController,
  ],
  providers: [AppService, ProductsService, CategoriesService],
})
export class AppModule {}
