import {
  Controller,
  Get,
  Post,
  Body,

  UseGuards,
  
} from '@nestjs/common';

import { AuthGuard } from 'src/auth/auth.guard/auth.guard';
import { ShipmentsService } from './shipments.service';
import { CreateShipmentDto } from './dto/create-shipment.dto';


@Controller('shipments')
@UseGuards(AuthGuard)
export class ShipmentsController {
  constructor(private shipmentsService: ShipmentsService) {}

  @Post()
  create(@Body() createShipmentDto: CreateShipmentDto) {
    return this.shipmentsService.create(createShipmentDto);
  }

  @Get()
  findAll() {}
}
