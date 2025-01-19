import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './entities/user.entity';
import { UtilsServices } from 'src/services/services.service';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private utils: UtilsServices,
  ) {}

  async findAll(): Promise<User[]> {
    return this.prisma.users.findMany();
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    //check if user already exists
    const existsUser = await this.prisma.users.findUnique({
      where: { email: createUserDto.email },
    });

    //if user exists, throw an error
    if (existsUser)
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);

    //create user
    return this.prisma.users.create({
      data: {
        email: createUserDto.email,
        name: createUserDto.name,
        //hash password
        password: await this.utils.hashPassword(createUserDto.password),
        isActive: true,
      },
    });
  }

  async findEmail(email: string): Promise<{password:string} | null> {
    return await this.prisma.users.findUnique({
      where: { email },
      select:{
        password: true
      }
    });
  }

  async remove(id: string): Promise<User> {
    return await this.prisma.users.delete({
      where: { id: id },
    });
  }
}
