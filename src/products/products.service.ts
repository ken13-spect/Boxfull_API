import { HttpException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Products } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

 /* async create(
    shipId: string,
    createProductDto: CreateProductDto,
  ): Promise<Products> {
    return this.prisma.products.create({
      data: {
        ...createProductDto,
        ShipmentsId: shipId,
      },
    });
  }
*/
  async getAll(): Promise<Products[]> {
    return this.prisma.products.findMany();
  }

  async findByShipId(id: string): Promise<Products[]> {
    return this.prisma.products.findMany({
      where: {
        ShipmentsId: id,
      },
    });
  }

  async findOne(id: string): Promise<Products> {
    return this.prisma.products.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Products> {
    return await this.prisma.products.update({
      where: {
        id: id,
      },
      data: {
        ...updateProductDto,
      },
    });
  }

  async remove(id: string): Promise<Products> {
    return this.prisma.products.delete({
      where: {
        id: id,
      },
    });
  }
}
