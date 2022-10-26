import { Injectable } from '@nestjs/common';

@Injectable()
export class StringUtils {
  public toUppserCase(text: string) {
    return text.toUpperCase();
  }
  public toLowerCase(text: string) {
    return text.toLocaleLowerCase();
  }
}
