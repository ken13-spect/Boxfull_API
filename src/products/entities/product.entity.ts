import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Product {
  @ApiProperty({ type: String })
  id: string;
  @ApiProperty({ type: Number })
  length: number;
  @ApiProperty({ type: Number })
  height: number;
  @ApiProperty({ type: Number })
  width: number;
  @ApiProperty({ type: Number })
  weight: number;
  @ApiProperty({ type: Number })
  units: number;
  @ApiProperty({ type: String })
  ShipmentsId: string;
  @ApiProperty({ type: String })
  descript: string;
}
