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
    return this.prisma.intervention.findMany();
  }

  findOne(id: string) {
    return this.prisma.intervention.findUnique({
      where: { id },
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
