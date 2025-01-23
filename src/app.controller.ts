import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/advertisement')
  getAdvertisement(): string {
    return this.appService.getAdvertisement();
  }

  @Get('/products/:productId')
  getProduct(@Param('productId') productId : string) {
    return 'Product '  + productId;
  }

  @Get('/products')
  getProducts(@Query() params: any) {
    const { limit, offset } = params;
    return `Products: limit => ${limit} offset => ${offset}`;
  }

  @Get('/categories/:categoryId/products/:productId')
  getCategories(@Param('categoryId') categoryId : string, @Param('productId') productId : string) {
    return 'Category ->  '  + categoryId + ' and Product -> ' + productId;
  }
}
