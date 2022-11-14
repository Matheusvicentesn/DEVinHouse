import { Module } from "@nestjs/common";
import { BeerModule } from './beer/beer.module';

@Module({
  imports: [BeerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
