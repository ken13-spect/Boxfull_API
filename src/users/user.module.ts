import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UtilsServices } from 'src/services/services.service';

@Module({
  exports: [UserService],
  providers: [UserService, PrismaService, UtilsServices],
})
export class UserModule {}
