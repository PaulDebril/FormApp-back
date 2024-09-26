import { Injectable } from '@nestjs/common';
import { CreateInterventionDto } from './dto/create-intervention.dto';
import { UpdateInterventionDto } from './dto/update-intervention.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class InterventionService {
  constructor(private prisma: PrismaService) {}
  create(createInterventionDto: CreateInterventionDto) {
    return this.prisma.intervention.create({
      data: createInterventionDto,
    });
  }

  findAll() {
    return this.prisma.intervention.findMany({
      include: {
        FormationCenter: true,
        Mission: true,
        Subject: true,
        Course: true,
        intermediaire: true,
        pricing: true,
        contact: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.intervention.findUnique({
      where: { id },
      include: {
        FormationCenter: true,
        Mission: true,
        Subject: true,
        Course: true,
        intermediaire: true,
        pricing: true,
        contact: true,
      },
    });
  }

  update(id: string, updateInterventionDto: UpdateInterventionDto) {
    return this.prisma.intervention.update({
      where: { id },
      data: updateInterventionDto,
    });
  }

  remove(id: string) {
    return this.prisma.intervention.delete({
      where: { id },
    });
  }
}
