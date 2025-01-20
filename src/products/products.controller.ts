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
import {
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { Product } from './entities/product.entity';

@Controller('products')
@UseGuards(AuthGuard)
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  /*@Post()
  create(@Query('id') idShip: string, @Body() createProductDto: CreateProductDto) {
      return this.productsService.create(idShip,createProductDto);
  }
*/
  @ApiOkResponse({
    type: String,
    isArray: true,
  })
  @Get('/all')
  async findAll() {
    return this.productsService.getAll();
  }

  @ApiOkResponse({
    type: Product,
    isArray: false,
  })
  @ApiNotFoundResponse({
    description: 'Not Found',
  })
  @Get()
  async findOne(@Query('id') id: string) {
    return this.productsService.findOne(id);
  }

  @ApiOkResponse({
    type: Product,
    isArray: true,
  })
  @ApiNotFoundResponse({
    description: 'Products no found',
  })
  @ApiInternalServerErrorResponse({
    description: 'Invalid Id length',
  })
  @Get('/shiptment')
  async getAllProductByShiptment(@Query('id') id: string) {
    return this.productsService.findByShipId(id);
  }

  @ApiOkResponse({
    type: UpdateProductDto,
    isArray: false,
  })
  @ApiNotFoundResponse({
    description: 'Product no found',
  })
  @Patch('/update')
  async update(
    @Query('idProduct') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update(id, updateProductDto);
  }

  @ApiOkResponse({
    type: Product,
    description: 'Deleted Successfully',
    isArray: false,
  })
  @Delete()
  async remove(@Query('id') id: string) {
    return await this.productsService.remove(id);
  }
}
