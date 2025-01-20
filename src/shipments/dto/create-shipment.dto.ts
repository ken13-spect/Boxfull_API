import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateProductDto } from 'src/products/dto/create-product.dto';

export class CreateShipmentDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  deliveryAddress: string;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  shippingDate: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: Date })
  referencePoint?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  indications?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  addresseeFirstName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  addresseeLastName: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  addresseeEmail: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  addresseePhone: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  pickUpAddress: string;

//Checking to receive id with correct format
@ApiProperty({ type: String })
  @IsNotEmpty()
  department: {
    id: string;
  };

  @ApiProperty({ type: String })
  @IsNotEmpty()
  towns: {
    id: string;
  };

  @ApiProperty({ type: String })
  @IsNotEmpty()
  user: {
    id: string;
  };

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateProductDto)
  shiptmentProducts: CreateProductDto[];
}
