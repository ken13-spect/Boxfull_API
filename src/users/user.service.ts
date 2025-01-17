import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './entities/user.entity';
import { UtilsService } from 'src/services/services.service';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private utils: UtilsService,
  ) {}


  async create(createUserDto: CreateUserDto): Promise<User> {
    //check if user already exists
    const existsUser = await this.prisma.users.findUnique({
      where: { email: createUserDto.email,},
    });

    //if user exists, throw an error
    if (existsUser)  throw new HttpException('User already exists', HttpStatus.CONFLICT);
     
    //create user
    return this.prisma.users.create({
      data: {
        ...createUserDto,
        //hash password
        password: await this.utils.hashPassword(createUserDto.password),
      },
    });
  }


  async findUserByEmail(email: string): Promise<User> {
    return await this.prisma.users.findUnique({
      where: { email },
    });
  }


  async remove(id: number): Promise<User> {
    //convert id to string
    const userId = id.toString();
    return await this.prisma.users.delete({
      where: { id : userId },
    });
   
  }
}
