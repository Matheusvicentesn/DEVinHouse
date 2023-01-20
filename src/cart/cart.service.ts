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
        await this.updateCartTotal();
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

  completePurchase(completePurchaseDto) {
    return new Promise(async (resolve, reject) => {
      try {
        if (
          completePurchaseDto.paymentInfo.cardNumber != '4444 4444 4444 4444' ||
          completePurchaseDto.paymentInfo.cardSecurityCode !== '222' ||
          new Date().getTime() >
            new Date(
              completePurchaseDto.paymentInfo.cardExpirationDate,
            ).getTime()
        ) {
          reject({ reason: 'Invalid payment info' });
        }
        const cart = await this.cartRepository.findOne({
          where: { user: 1 },
          relations: { products: true },
        });
        const total = cart.products.reduce((acc, { price }) => price + acc, 0);
        cart.clearCart();
        await this.cartRepository.save(cart);
        resolve({ ...completePurchaseDto, total });
      } catch (error) {
        reject({ code: error.code, detail: error.detail });
      }
    });
  }

  async updateCartTotal() {
    const cart = await this.cartRepository.findOne({
      where: { user: 1 },
      relations: {
        products: true,
      },
    });

    const newTotal = cart.products.reduce((acc, { price }) => acc + price, 0);
    await this.cartRepository.save({ ...cart, total: newTotal });
  }
}
