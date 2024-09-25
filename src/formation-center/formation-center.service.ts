import { Injectable } from '@nestjs/common';
import { CreateFormationCenterDto } from './dto/create-formation-center.dto';
import { UpdateFormationCenterDto } from './dto/update-formation-center.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FormationCenterService {
  constructor(private prisma: PrismaService) {}
  create(createFormationCenterDto: CreateFormationCenterDto) {
    return this.prisma.formationCenter.create({
      data: createFormationCenterDto,
    });
  }
  findAll() {
    return this.prisma.formationCenter.findMany();
  }

  findOne(id: string) {
    return this.prisma.formationCenter.findUnique({
      where: { id },
    });
  }

  update(id: string, updateFormationCenterDto: UpdateFormationCenterDto) {
    return this.prisma.formationCenter.update({
      where: { id },
      data: updateFormationCenterDto,
    });
  }

  remove(id: string) {
    return this.prisma.formationCenter.delete({
      where: { id },
    });
  }
}
