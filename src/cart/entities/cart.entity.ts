import { ProductEntity } from 'src/products/entities/product.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: 'shoppingCart' })
export class CartEntity {
  removeProduct(id: number) {
    throw new Error('Method not implemented.');
  }
  @PrimaryColumn('int')
  user: number;

  @Column('int')
  total: number;

  @ManyToMany(() => ProductEntity)
  @JoinTable({ name: 'shoppingCart_products' })
  products: ProductEntity[];

  addProduct(product: ProductEntity) {
    if (this.products === null) {
      this.products = new Array<ProductEntity>();
    }
    this.products.push(product);
  }
}
