import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDTO } from 'src/users/dto/login-user-dto';
import { AuthResponse } from './dto/auth-response-dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/entities/user.entity';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('login')
    singIng(@Body() loginUserDto: LoginUserDTO): Promise<AuthResponse>{
        return this.authService.sinIng(loginUserDto);
    }

   
    @Post('register')
    register(@Body() createUserDto: CreateUserDto): Promise<User>{
        return this.authService.register(createUserDto);
    }
}
