import { ApiProperty } from "@nestjs/swagger"

export class User {
    @ApiProperty({ type: String })
    id  : string    
    @ApiProperty({ type: String })  
    email      : string   
    @ApiProperty({ type: String })
    name       : string   
    @ApiProperty({ type: String })
    password   : string   
    @ApiProperty({ type: Boolean })
    isActive   : boolean 
    @ApiProperty({ type: Date })
    createdAt  : Date
    @ApiProperty({ type: Date })
    updatedAt  : Date
}
