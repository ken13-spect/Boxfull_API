import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateShipmentDto } from './dto/create-shipment.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ShipmentsService {
  constructor(private prisma: PrismaService) {}

  async create(createShipmentDto: CreateShipmentDto) {
    try {
      const { shiptmentProducts, ...shipmentData } = createShipmentDto;
      //validating that the shipment has products
      if (!Array.isArray(shiptmentProducts) || shiptmentProducts.length == 0)
        throw new HttpException('Produts no valid', HttpStatus.BAD_REQUEST);
      
      //user transaction for create Shipment and products
      return this.prisma.$transaction(async (prisma) => {
        const newShiptment = await prisma.shipments.create({   //ctransaction to create the shipment and the products
          data: {
            ...shipmentData,
            //connecting tables using common field
            department: { connect: { id: shipmentData.department.id } },
            towns: { connect: { id: shipmentData.towns.id } },
            user: { connect: { id: shipmentData.user.id } },
          },
        });
        //creating the products of the shipment
        await prisma.products.createMany({
          data: shiptmentProducts.map((product) => ({
            ...product,
            ShipmentsId: newShiptment.id,
          })),
        });
        return newShiptment;
      });
    } catch (error) {
      throw new HttpException('Shiptment not created', HttpStatus.BAD_REQUEST);
    }
  }
}
