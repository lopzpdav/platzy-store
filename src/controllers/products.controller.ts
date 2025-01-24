import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res
} from '@nestjs/common';

import { Response } from 'express';

@Controller('products')
export class ProductsController {

   //THERE IS A CONFLICT BETWEEN THIS ROUTE AND THE ONE BELOW
  //TO MAKE IT WORK, WE NEED TO CHANGE THE ORDER OF THE ROUTES
  //DYNAMIC ROUTES SHOULD BE AT THE END
  //FOR THIS CASE ESPECIFICALLY, THE ROUTE /products/filter
  //SHOULD BE BEFORE /products/:productId CAUSE SECOND IS DYNAMIC

  @Get('/filter')
  @HttpCode(HttpStatus.ACCEPTED)
  getProductsFilter() {
    return {
      message: 'Testing order for param vs path routes'
    };
  }

  //WE CAN USE RES FROM EXPRESS TO SEND A CUSTOM STATUS CODE
  //AND A CUSTOM MESSAGE, ACCORDING TO THE REQUIREMENTS
  //OR BUSINESS LOGIC
  @Get('/:productId')
  getOne(
    @Res() response: Response,
    @Param('productId') productId : string
  ) {
    if (productId === '999') {
      response.status(404).send({
        message: `Product ${productId} not found`
      });
    };

    response.status(200).send({
      message: `Product ${productId}`
    });
  }

  @Get()
  @HttpCode(HttpStatus.ACCEPTED)
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
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: any) {
    return {
      message: 'Creating a product',
      payload,
    };
  }

  @Put(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  update(@Param('id') id: string, @Body() payload: any) {
    return {
      message: 'Updating a product',
      id,
      payload,
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  delete(@Param('id') id: string) {
    return {
      message: 'Deleting a product',
      id
    };
  }
}
