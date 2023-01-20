import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: Repository<ProductEntity>,
  ) {}

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  async findAll(query?): Promise<ProductEntity[]> {
    return new Promise(async (resolve, reject) => {
      try {
        if (query) {
          const products = await this.productRepository.find({
            where: {
              category: parseInt(query),
            },
          });
          resolve(products);
        }

        const products = await this.productRepository.find();
        resolve(products);
      } catch (error) {
        reject(error);
      }
    });
  }

  async findOne(id: number): Promise<ProductEntity> {
    return new Promise(async (resolve, reject) => {
      try {
        const searchedProduct = await this.productRepository.findOne({
          where: {
            id: id,
          },
        });
        resolve(searchedProduct);
      } catch (error) {
        reject(error);
      }
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
