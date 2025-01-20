import { IsInt, IsNumber, IsString, MaxLength } from "class-validator";
import { ApiPropertyOptional } from '@nestjs/swagger';
export class CreateProductDto {
  @IsNumber()
  length: number;
  @IsNumber()
  height: number;
  @IsNumber()
  width: number;
  @IsNumber()
  weight: number;
  @IsInt()
  units: number;
  @IsString()
  @MaxLength(50)
  description: string;
}
