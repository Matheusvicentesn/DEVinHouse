import { BadRequestException, ConflictException, Injectable } from "@nestjs/common";
import { Database } from "src/database/database";
import { UpdateBeerDto } from "./dto/update-beer.dto";
import { Beer } from "./entities/beer.entity";

@Injectable()
export class BeerService {
  constructor(private database: Database) {}
  async createBeer(beer: Beer) {
    const beerExist = await this.database
      .getBeers()
      .find((beers) => beers.name === beer.name);
    if (beerExist) {
      throw new ConflictException({
        statusCode: 409,
        message: "beer already exists in the database",
      });
    }
    this.database.writeBeer(beer);
    return beer;
  }

  async findAllBeers(page, size, name) {
    if (page < 1) {
      throw new BadRequestException({
        statusCode: 400,
        message: "Pagination start with number 1",
      });
    } else if (name) {
      const nameBeer = this.findOne(name);
      const nameBeerPaginated = (await nameBeer).slice(
        (page - 1) * size,
        page * size
      );
      return nameBeerPaginated;
    } else {
      const pagination = await this.database
        .getBeers()
        .slice((page - 1) * size, page * size);
      return pagination;
    }
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
