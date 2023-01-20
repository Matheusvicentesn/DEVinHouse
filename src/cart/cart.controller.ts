import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductEntity } from 'src/products/entities/product.entity';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CartService } from './cart.service';

@Controller('shopping-carts')
export class CartController {
  constructor(private readonly CartService: CartService) {}

  @Post()
  create() {
    return this.CartService.create();
  }

  @Post('add-product')
  async addProductToCart(@Body() product: ProductEntity) {
    return await this.CartService.addProductToCart(product);
  }

  @Get('products')
  async findAllProductsInTheCart() {
    return await this.CartService.findAllProductsInTheCart();
  }
}
