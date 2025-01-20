import { ApiProperty } from '@nestjs/swagger';


export class AuthResponse {
    @ApiProperty({
        type: String,
        description: 'access_token'
    })
    access_token: string;
}