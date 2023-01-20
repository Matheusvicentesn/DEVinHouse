import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { databaseProviders } from 'src/core/database/database.provider';
import { productsProviders } from './products.provider';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, ...databaseProviders, ...productsProviders],
})
export class ProductsModule {}
