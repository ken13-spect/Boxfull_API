import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UtilsServices } from 'src/services/services.service';
import { LoginUserDTO } from 'src/users/dto/login-user-dto';
import { UserService } from 'src/users/user.service';
import { AuthResponse } from './dto/auth-response-dto';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userServices: UserService,
    private utilsServices: UtilsServices,
    private jwtService: JwtService,
  ) {}

  async sinIng({ email, password }: LoginUserDTO): Promise<AuthResponse> {
    //find user by email
    const user = this.userServices.findUserByEmail(email);
    //check if user exists
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    //check if password is correct
    const isPasswordValid = this.utilsServices.comparePassword(
      password,
      password,
    );
    if (!isPasswordValid)
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    //generate token
    const token = await this.jwtService.signAsync({ email });
    return { access_token: token };
  }

  async register(createUserDto: CreateUserDto): Promise<User> {
    return await this.userServices.create(createUserDto);
  }
}
