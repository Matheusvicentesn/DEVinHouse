import { Inject, Injectable } from '@nestjs/common';
import { ProductEntity } from 'src/products/entities/product.entity';
import { Repository } from 'typeorm';
import { CartEntity } from './entities/cart.entity';

@Injectable()
export class CartService {
  constructor(
    @Inject('CART_REPOSITORY')
    private cartRepository: Repository<CartEntity>,
  ) {}

  removeProductFromCart(id: number) {
    return new Promise(async (resolve, reject) => {
      try {
        const shoppingCart = await this.cartRepository.findOne({
          where: {
            user: 1,
          },
          relations: {
            products: true,
          },
        });

        shoppingCart.removeProduct(id);

        await this.cartRepository.save(shoppingCart);
        resolve(true);
      } catch (error) {
        reject({ code: error.code, detail: error.detail });
      }
    });
  }

  async create() {
    return new Promise(async (resolve, reject) => {
      try {
        const cart = { user: 1, total: 0 };
        await this.cartRepository.insert(cart);
        resolve(cart);
      } catch (error) {
        reject({ code: error.code, detail: error.detail });
      }
    });
  }

  addProductToCart(product: ProductEntity) {
    return new Promise(async (resolve, reject) => {
      try {
        const cartToAddProduct = await this.cartRepository.findOne({
          where: { user: 1 },
          relations: {
            products: true,
          },
        });

        cartToAddProduct.addProduct(product);

        await this.cartRepository.save(cartToAddProduct);
        resolve(true);
      } catch (error) {
        reject({ code: error.code, detail: error.detail });
      }
    });
  }

  findAllProductsInTheCart() {
    return new Promise(async (resolve, reject) => {
      try {
        const { products } = await this.cartRepository.findOne({
          where: { user: 1 },
          relations: {
            products: true,
          },
        });

        resolve(products);
      } catch (error) {
        reject(error);
      }
    });
  }
}
