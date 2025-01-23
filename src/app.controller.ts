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

  //THERE IS A CONFLICT BETWEEN THIS ROUTE AND THE ONE BELOW
  //TO MAKE IT WORK, WE NEED TO CHANGE THE ORDER OF THE ROUTES
  //DYNAMIC ROUTES SHOULD BE AT THE END
  //FOR THIS CASE ESPECIFICALLY, THE ROUTE /products/filter
  //SHOULD BE BEFORE /products/:productId CAUSE SECOND IS DYNAMIC

  @Get('/products/filter')
  getProductsFilter() {
    return 'Testing order for param vs path routes';
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
