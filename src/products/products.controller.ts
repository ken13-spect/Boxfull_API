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
      return this.productsService.create(idShip,createProductDto);
  }
*/
  @Get('/all')
  async findAll() {
    return this.productsService.getAll();
  }

  @Get()
  async findOne(@Query('id') id: string) {
      return this.productsService.findOne(id);
  }

  @Get('/shiptment')
  async getAllProductByShiptment(@Query('id') id : string){
    return this.productsService.findByShipId(id)
  }

  @Patch('/update')
  async update(@Query('idProduct') id: string, @Body() updateProductDto: UpdateProductDto) {
      return this.productsService.update(id,updateProductDto)
  }

  @Delete()
  async remove(@Query('id') id: string) {
      return await this.productsService.remove(id);
   }
}
