import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/users/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { UtilsServices } from 'src/services/services.service';
import { AuthGuard } from './auth.guard/auth.guard';

@Module({
  imports: [UserModule,
    JwtModule.register({
      global: true, 
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' }
    })

  ],
  providers: [AuthService, UtilsServices,AuthGuard],
  controllers: [AuthController],
  exports: [AuthService,AuthGuard]  
})
export class AuthModule {}
