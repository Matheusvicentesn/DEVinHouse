import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ProductCategories } from '../entities/product.entity';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsEnum(ProductCategories, {
    message:
      "Product category must be one of the following: 'seguranca', 'redes' or 'acesso'",
  })
  readonly category: ProductCategories;
}
