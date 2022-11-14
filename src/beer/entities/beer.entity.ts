import { IsEnum, IsNotEmpty, IsString } from "class-validator";

enum TypeBear {
  Lager = "Lager",

  Pilsen = "Pilsen",

  Weizen = "Weizen",

  Ipa = "Ipa",
}
export class Beer {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  breweryName: string;
  @IsEnum(TypeBear)
  @IsNotEmpty()
  type: TypeBear;
}
