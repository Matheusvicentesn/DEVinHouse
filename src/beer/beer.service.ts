import { Injectable } from "@nestjs/common";
import { Database } from "src/database/database";
import { CreateBeerDto } from "./dto/create-beer.dto";
import { UpdateBeerDto } from "./dto/update-beer.dto";
import { Beer } from "./entities/beer.entity";

@Injectable()
export class BeerService {
  constructor(private database: Database) {}
  create(beer: Beer) {
    this.database.writeBeer(beer);
    return beer;
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
