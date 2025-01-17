import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from '../constants';
import { Request } from 'express';


@Injectable()
export class AuthGuard implements CanActivate {
 
  constructor(private jwtService: JwtService) {}

  async canActivate(
    context: ExecutionContext
  ):  Promise<boolean>{
      //get the request
    const request = context.switchToHttp().getRequest();
    //get the token from the request headers
    const access_token = this.extractTokenFromHeader(request);
    //check if token exists
    if (!access_token) 
      throw new HttpException('Token not found', HttpStatus.UNAUTHORIZED);

    //verify the token
    try{
      const payload = await this.jwtService.verifyAsync(
        access_token,
        { secret: jwtConstants.secret}
      )
      //set payload to the request object
      request.user = payload;
    }catch(e){
      return false;
    }
    
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}

