import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  Req,
} from '@nestjs/common';
import { ShipmentsService } from './shipments.service';
import { CreateShipmentDto } from './dto/create-shipment.dto';
import { UpdateShipmentDto } from './dto/update-shipment.dto';
import { AuthGuard } from 'src/auth/auth.guard/auth.guard';

@Controller('shipments')
@UseGuards(AuthGuard)
export class ShipmentsController {
  constructor(private shipmentsService: ShipmentsService) {}

  @Post()
  create(
    @Req() req: any,
    @Query('deparId') deparId: string,
    @Query('townId') townId: string,
    @Body() createShipmentDto: CreateShipmentDto,
  ) {
    return this.shipmentsService.create(
      req.user,
      deparId,
      townId,
      createShipmentDto,
    );
  }

  @Get()
  findAll() {}
}
