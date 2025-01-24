import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {

  @Get('/:categoryId/products/:productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getCategories(
    @Param('categoryId') categoryId : string,
    @Param('productId') productId : string
  ) {
    return {
      message: `Category ${categoryId} and Product ${productId}`
    };
  }
}
