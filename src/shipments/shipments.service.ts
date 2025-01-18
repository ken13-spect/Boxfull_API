import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateShipmentDto } from './dto/create-shipment.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Shipment } from './entities/shipment.entity';


@Injectable()
export class ShipmentsService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, departmentId: string, townId: string, createShipmentDto: CreateShipmentDto) {
    try{
      return await this.prisma.shipments.create({
        data: {
          ...createShipmentDto,
         departmentId: departmentId,
         townId: townId,
         UserId: userId
         
        }
        
      });
    }catch(error){
      throw new HttpException('Not created', HttpStatus.BAD_REQUEST)
    }
  }

}
