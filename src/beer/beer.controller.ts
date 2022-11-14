import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Put,
} from "@nestjs/common";
import { BeerService } from "./beer.service";
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

  @Get(":name")
  findOne(@Param("name") name: string) {
    return this.beerService.findOne(name);
  }

  @Put(":name")
  public updateDriver(
    @Body() beer: Beer,
    @Param("name") name: string
  ) {
    return this.beerService.updateBeer(beer, name);
  }

  @Delete(":name")
  remove(@Param("name") name: string) {
    return this.beerService.remove(name);
  }
}
