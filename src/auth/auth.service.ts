import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UtilsServices } from 'src/services/services.service';
import { LoginUserDTO } from 'src/users/dto/login-user-dto';
import { UserService } from 'src/users/user.service';
import { AuthResponse } from './dto/auth-response-dto';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/entities/user.entity';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

@Injectable()
export class AuthService {
  constructor(
    private userServices: UserService,
    private utilsServices: UtilsServices,
    private jwtService: JwtService,
  ) {}

  async sinIng({ password, email }: LoginUserDTO): Promise<AuthResponse> {
    //find user by email
    const user = await this.userServices.findEmail(email);

    if (!user)
      throw new HttpException('User no existing', HttpStatus.BAD_REQUEST);
    //use bcrypt conmpare
    const validPassword = await this.utilsServices.comparePassword(
      password,
      user.password,
    );

    if (!validPassword) {
      throw new HttpException('Incorrect password', HttpStatus.UNAUTHORIZED);
    }

    //generate token
    const token = await this.jwtService.signAsync({ email });
    return { access_token: token };
  }

  async register(createUserDto: CreateUserDto): Promise<User> {
    return await this.userServices.create(createUserDto);
  }
}
