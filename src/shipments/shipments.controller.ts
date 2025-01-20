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
import {ApiBadRequestResponse, ApiCreatedResponse} from '@nestjs/swagger';
import { Shipment } from './entities/shipment.entity';


@Controller('shipments')
@UseGuards(AuthGuard)
export class ShipmentsController {
  constructor(private shipmentsService: ShipmentsService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Created Succesfully',
    type: Shipment,
    isArray: false,
  })
  @ApiBadRequestResponse({ description: 'Creation of failed shipment' })
  create(@Body() createShipmentDto: CreateShipmentDto) {
    return this.shipmentsService.create(createShipmentDto);
  }
}
