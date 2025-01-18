import { Type } from "class-transformer";
import { IsArray, IsDateString, IsEmail, IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator";
import { CreateProductDto } from "src/products/dto/create-product.dto";

export class CreateShipmentDto {

    @IsString()
  @IsNotEmpty()
  deliveryAddress: string;

  @IsDateString()
  @IsNotEmpty()
  shippingDate: string;

  @IsString()
  @IsOptional()
  referencePoint?: string;

  @IsString()
  @IsOptional()
  indications?: string;

  @IsString()
  @IsNotEmpty()
  addresseeFirstName: string;

  @IsString()
  @IsNotEmpty()
  addresseeLastName: string;

  @IsEmail()
  @IsNotEmpty()
  addresseeEmail: string;

  @IsString()
  @IsNotEmpty()
  addresseePhone: string;

  @IsString()
  @IsNotEmpty()
  pickUpAddress: string;

  @IsString()
  @IsNotEmpty()
  departmentId: string;

  @IsString()
  @IsNotEmpty()
  townId: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateProductDto)
  products: CreateProductDto[];

}
