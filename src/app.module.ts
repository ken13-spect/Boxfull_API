import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './users/user.module';
import { ShipmentsModule } from './shipments/shipments.module';
import { ProductsModule } from './products/products.module';
import { ServicesModule } from './services/services.module';


@Module({
  imports: [PrismaModule, UserModule, ShipmentsModule, ProductsModule, ServicesModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
