import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getGreetings(): string {
    return 'Greetings from Argentina!';
  }

  getNames(name: string): string {
    return `My name is ${name}`;
  }

  getCategories(id: number, productId: number): string {
    return `This is the category number: ${id}, and the product number: ${productId}`;
  }

  getPagination(limit: number, offset: number): string {
    return `This is the limit: ${limit}, and this is the offset: ${offset}`;
  }
}
