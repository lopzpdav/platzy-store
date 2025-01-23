import { Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {

   //THERE IS A CONFLICT BETWEEN THIS ROUTE AND THE ONE BELOW
  //TO MAKE IT WORK, WE NEED TO CHANGE THE ORDER OF THE ROUTES
  //DYNAMIC ROUTES SHOULD BE AT THE END
  //FOR THIS CASE ESPECIFICALLY, THE ROUTE /products/filter
  //SHOULD BE BEFORE /products/:productId CAUSE SECOND IS DYNAMIC

  @Get('/filter')
  getProductsFilter() {
    return {
      message: 'Testing order for param vs path routes'
    };
  }

  @Get('/:productId')
  getProduct(
    @Param('productId') productId : string
  ) {
    return {
      message: `Product ${productId}`
    };
  }

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand : string
  ) {
    return {
      message: `Products: limit => ${limit} offset => ${offset} brand => ${brand}`
    };

  }

  @Post()
  create(){
    return {
      message: 'Creating a product'
    };
  }
}
