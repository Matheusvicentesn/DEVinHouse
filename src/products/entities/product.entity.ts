import { CartEntity } from 'src/cart/entities/cart.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export enum ProductCategories {
  seguranca,
  redes,
  acesso,
}

@Entity({ name: 'products' })
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column('float')
  price: number;

  @Column({ length: 250 })
  description: string;

  @Column('int')
  category: ProductCategories;

  @Column('bool')
  isActive: boolean;
  @ManyToOne(() => CartEntity, (shoppingCart) => shoppingCart.products, {
    onDelete: 'SET NULL',
  })
  shoppingCart?: CartEntity;
}
