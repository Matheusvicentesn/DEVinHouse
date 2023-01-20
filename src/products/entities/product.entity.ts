import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
