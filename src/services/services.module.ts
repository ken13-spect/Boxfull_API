import { Module } from '@nestjs/common';
import { UtilsServices } from './services.service';

@Module({
  providers: [UtilsServices],
  exports: [UtilsServices]
})
export class ServicesModule {}
