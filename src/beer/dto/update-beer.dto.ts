import { PartialType } from '@nestjs/mapped-types';
import { CreateBeerDto } from './create-beer.dto';

export class UpdateBeerDto extends PartialType(CreateBeerDto) {}
