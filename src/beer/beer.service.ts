import { Injectable } from '@nestjs/common';
import { CreateBeerDto } from './dto/create-beer.dto';
import { UpdateBeerDto } from './dto/update-beer.dto';

@Injectable()
export class BeerService {
  create(createBeerDto: CreateBeerDto) {
    return 'This action adds a new beer';
  }

  findAll() {
    return `This action returns all beer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} beer`;
  }

  update(id: number, updateBeerDto: UpdateBeerDto) {
    return `This action updates a #${id} beer`;
  }

  remove(id: number) {
    return `This action removes a #${id} beer`;
  }
}
