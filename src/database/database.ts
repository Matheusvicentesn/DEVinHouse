import { Injectable } from "@nestjs/common";
import * as fs from "fs";
import { Beer } from "src/beer/entities/beer.entity";

@Injectable()
export class Database {
  private FILENAMEBEER = "src/database/beer.json";

  public getBeers(): Array<Beer> {
    const beersFile = fs.readFileSync(this.FILENAMEBEER, "utf-8").toString();
    const beers = JSON.parse(beersFile);
    return beers;
  }

  public writeBeer(beer: Beer) {
    let beers = this.getBeers();
    if (beers) {
      beers = [];
    }
    fs.writeFileSync(
      this.FILENAMEBEER,
      JSON.stringify([...this.getBeers(), beer])
    );
  }

  public deleteBeer(beer: Beer[]) {
    fs.writeFileSync(this.FILENAMEBEER, JSON.stringify(beer));
  }

  public updateBeer(beer: Beer[]) {
    fs.writeFileSync(this.FILENAMEBEER, JSON.stringify(beer));
  }
}
