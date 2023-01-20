import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ProductEntity } from 'src/products/entities/product.entity';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CartService } from './cart.service';

@Controller('shopping-carts')
export class CartController {
  constructor(private readonly CartService: CartService) {}

  @Post('complete-purchase')
  async completePurchase(@Body() completePurchaseDto) {
    try {
      return await this.CartService.completePurchase(completePurchaseDto);
    } catch (error) {
      if (error.reason == 'Invalid payment info')
        throw new HttpException(
          { detail: error.reason },
          HttpStatus.BAD_REQUEST,
        );
    }
  }

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

  @Delete(':id')
  async removeProductFromCart(@Param('id') productId: number) {
    return this.CartService.removeProductFromCart(productId);
  }
}
