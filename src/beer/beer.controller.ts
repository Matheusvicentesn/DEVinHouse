import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { BeerService } from "./beer.service";
import { UpdateBeerDto } from "./dto/update-beer.dto";
import { Beer } from "./entities/beer.entity";

@Controller("beer")
export class BeerController {
  constructor(private readonly beerService: BeerService) {}

  @Post()
  create(@Body() beer: Beer) {
    return this.beerService.create(beer);
  }

  @Get()
  findAll() {
    return this.beerService.findAll();
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
