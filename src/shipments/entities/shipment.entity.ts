import { ApiProperty } from '@nestjs/swagger';

export class Shipment {
  @ApiProperty({ type: String })
  id: string;
  @ApiProperty({ type: String })
  deliveryAddress: string;
  @ApiProperty({ type: Date })
  shippingDate: Date;
  @ApiProperty({ type: String })
  referencePoint: string;
  @ApiProperty({ type: String })
  indications: string;
  @ApiProperty({ type: String })
  addresseeFirstName: string;
  @ApiProperty({ type: String })
  addresseeLastName: string;
  @ApiProperty({ type: String })
  addresseeEmail: string;
  @ApiProperty({ type: String })
  addresseePhone: string;
  @ApiProperty({ type: String })
  pickUpAddress: string;
  @ApiProperty({ type: String })
  DepartmentId: string;
  @ApiProperty({ type: String })
  TownId: string;
  @ApiProperty({ type: String })
  towns: string;
  @ApiProperty({ type: String })
  UserId: string;
  @ApiProperty({ type: String })
  user: string;
  @ApiProperty({ type: String })
  products: string;
}
