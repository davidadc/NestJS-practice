import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat): string {
    this.cats.push(cat);
    return 'Cat saved successfully';
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
