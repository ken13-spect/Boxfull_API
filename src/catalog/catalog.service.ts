import { Injectable } from '@nestjs/common';
import { Department, Towns } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CatalogService {
  constructor(private prisma: PrismaService) {}

  //get all Departments
  async getDepartmets(): Promise<Department[]> {
    return await this.prisma.department.findMany();
  }

  //get all towns by Department
  async getTownsByDepartment(apartmentId: string): Promise<Towns[]> {
    return await this.prisma.towns.findMany({
      where: {
        departmentId: apartmentId,
      },
    });
  }
}
