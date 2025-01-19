import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UtilsServices } from 'src/services/services.service';
import { UsersController } from './users.controller';

@Module({
  exports: [UserService],
  providers: [UserService, PrismaService, UtilsServices],
  controllers: [UsersController],
})
export class UserModule {}
