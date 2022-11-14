import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from "@nestjs/common";
import { BeerService } from "./beer.service";
import { UpdateBeerDto } from "./dto/update-beer.dto";
import { Beer } from "./entities/beer.entity";

@Controller("beer")
export class BeerController {
  constructor(private readonly beerService: BeerService) {}

  @Post()
  create(@Body() beer: Beer) {
    return this.beerService.createBeer(beer);
  }

  @Get()
  findAll(
    @Query("page") page = 1,
    @Query("size") size = 50,
    @Query("name") name
  ) {
    return this.beerService.findAllBeers(page, size, name);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.beerService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateBeerDto: UpdateBeerDto) {
    return this.beerService.update(+id, updateBeerDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.beerService.remove(+id);
  }
}
