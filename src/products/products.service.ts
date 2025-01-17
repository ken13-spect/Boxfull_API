import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Products } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  create(createProductDto: CreateProductDto) {}

  async getAll(): Promise<Products[]> {
    return this.prisma.products.findMany();
  }

  findOne(id: number) {}

  update(id: number, updateProductDto: UpdateProductDto) {}

  remove(id: number) {}
}
