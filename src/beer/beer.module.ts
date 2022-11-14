import { Module } from '@nestjs/common';
import { BeerService } from './beer.service';
import { BeerController } from './beer.controller';

@Module({
  controllers: [BeerController],
  providers: [BeerService]
})
export class BeerModule {}
