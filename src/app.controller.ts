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
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand : string
  ) {
    return `Products: limit => ${limit} offset => ${offset} brand => ${brand}`;
  }

  @Get('/categories/:categoryId/products/:productId')
  getCategories(@Param('categoryId') categoryId : string, @Param('productId') productId : string) {
    return 'Category ->  '  + categoryId + ' and Product -> ' + productId;
  }
}
