import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { databaseProviders } from 'src/core/database/database.provider';
import { cartProviders } from './products.provider';
import { productsProviders } from 'src/products/products.provider';

@Module({
  controllers: [CartController],
  providers: [
    CartService,
    ...databaseProviders,
    ...cartProviders,
    ...productsProviders,
  ],
})
export class CartModule {}
