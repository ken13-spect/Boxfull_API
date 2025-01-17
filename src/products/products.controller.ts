import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    
  }

  @Get()
  findAll() {
    return this.productsService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
   
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
   
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    
  }
}
