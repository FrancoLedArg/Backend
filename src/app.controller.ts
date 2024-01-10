import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('greetings')
  getGreetings(): string {
    return this.appService.getGreetings();
  }

  @Get('names/:name')
  getNames(@Param() params: { name: string }): string {
    return this.appService.getNames(params.name);
  }

  // This could be done also in this way

  // getNames(@Param() name: string): string {
  // return this.appService.getNames(name);
  // }

  @Get('categories/:id/products/:productId')
  getCategories(
    // This also could be done in this 2 ways

    // @Param('id') id: number,
    // @Param('productId') productId: number,
    @Param() params: { id: number; productId: number },
  ): string {
    // return this.appService.getCategories(id, productId);
    return this.appService.getCategories(params.id, params.productId);
  }

  @Get('pagination')
  getPagination(@Query() params: { limit: number; offset: number }): string {
    const { limit, offset } = params;

    return this.appService.getPagination(limit, offset);
  }

  // You can also predefine some queries

  // getPagination(
  //    @Query('limit') limit = 100, -- This will infer the type number on top of the predefined value
  //    @Query('offset') offset: number, Here i don't predefine a value, but i type it
  // ): string {
  //  const { limit, offset } = params;
  //
  //  return this.appService.getPagination(limit, offset);
  // }
}
