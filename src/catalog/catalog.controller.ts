import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { AuthGuard } from 'src/auth/auth.guard/auth.guard';
import {ApiOkResponse} from '@nestjs/swagger';

@Controller('catalog')
@UseGuards(AuthGuard)
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}

  @ApiOkResponse({
    type:String,
    isArray: true
  })
  @Get('departmets')
  async getDepartments() {
    return this.catalogService.getDepartmets();
  }


  @ApiOkResponse({
    type:String,
    isArray: true
  })
  @Get('towns')
  async getTownsByDepartment(@Query('id') id: string) {
    return await this.catalogService.getTownsByDepartment(id);
  }
}
