import { Injectable } from '@nestjs/common';
import { CreateFormationDto } from './dto/create-formation.dto';
import { UpdateFormationDto } from './dto/update-formation.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FormationService {
  constructor(private prisma: PrismaService) {}
  create(createFormationDto: CreateFormationDto) {
    return this.prisma.formation.create({ data: createFormationDto });
  }

  findAll() {
    return this.prisma.formation.findMany({
      include: {
        formationCenter: true,
        subjects: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.formation.findUnique({
      where: { id },
      include: {
        formationCenter: true,
        subjects: true,
      },
    });
  }

  update(id: string, updateFormationDto: UpdateFormationDto) {
    return this.prisma.formation.update({
      where: { id },
      data: updateFormationDto,
    });
  }

  remove(id: string) {
    return this.prisma.formation.delete({ where: { id } });
  }
}
