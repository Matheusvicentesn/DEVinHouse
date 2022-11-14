import { Module } from "@nestjs/common";
import { BeerService } from "./beer.service";
import { BeerController } from "./beer.controller";
import { Database } from "src/database/database";

@Module({
  controllers: [BeerController],
  providers: [BeerService, Database],
})
export class BeerModule {}
