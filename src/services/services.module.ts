import { Module } from '@nestjs/common';
import { UtilsService } from './services.service';

@Module({
  providers: [UtilsService],
  exports: [UtilsService]
})
export class ServicesModule {}
