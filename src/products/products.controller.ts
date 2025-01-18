import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { AuthGuard } from 'src/auth/auth.guard/auth.guard';


@Controller('products')
@UseGuards(AuthGuard)
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  /*@Post()
  create(@Query('id') idShip: string, @Body() createProductDto: CreateProductDto) {
    try {
      return this.productsService.create(idShip,createProductDto);
    } catch (error) {
      throw new HttpException('Product not delete', HttpStatus.BAD_REQUEST);
    }
  }
*/
  @Get('/all')
  async findAll() {
    return this.productsService.getAll();
  }

  @Get()
  async findOne(@Query('idProduct') id: string) {
    try {
      return this.productsService.findOne(id);
    } catch (error) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
  }

  @Patch('/update')
  async update(@Query('idProduct') id: string, @Body() updateProductDto: UpdateProductDto) {
    try{
      return this.productsService.update(id,updateProductDto)
      
    }catch(error){
      throw new HttpException( 'Product that has already been removed', HttpStatus.BAD_REQUEST);
    }
  }

  @Delete()
  async remove(@Query('id') id: string) {
    try {
      return await this.productsService.remove(id);
    } catch (error) {
      throw new HttpException('Product not delete', HttpStatus.BAD_REQUEST);
    }
  }
}
