import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { ProductsService } from './services/products/products.service';
import { CategoriesService } from './services/categories/categories.service';
import { BrandController } from './brands/brand/brand.controller';
import { CustomersController } from './services/customers/customers.controller';
import { BrandsController } from './services/brands/brands.controller';
import { UsersController } from './services/users/users.controller';
import { UsersController } from './controllers/users/users.controller';
import { CustomersController } from './controllers/customers/customers.controller';
import { BrandsController } from './controllers/brands/brands.controller';
import { BrandController } from './controllers/brand/brand.controller';
import { BrandController } from './controllers/brands/brand/brand.controller';
import { BrandController } from './src/brands/brand/brand.controller';
import { BrandController } from './brands/brand/brand.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, CategoriesController, BrandController, BrandsController, CustomersController, UsersController],
  providers: [AppService, ProductsService, CategoriesService],
})
export class AppModule {}
