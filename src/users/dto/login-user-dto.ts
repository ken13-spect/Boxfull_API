import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDTO {
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({
    type: String,
    description: 'This is a required property'
    })
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}