import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MaxLength(20)
  @MinLength(3)
  @ApiPropertyOptional({ type: String })
  name?: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  email: string;

  @IsNotEmpty()
  //regex expression for password validation
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
    message:
      'The password must have at least 1 number, 1 letter, 1 special character, and a length of 8 ',
  })
  @ApiProperty({ type: String })
  password: string;
}
