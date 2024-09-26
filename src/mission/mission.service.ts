import { Injectable } from '@nestjs/common';
import { CreateMissionDto } from './dto/create-mission.dto';
import { UpdateMissionDto } from './dto/update-mission.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MissionService {
  constructor(private prisma: PrismaService) {}
  create(createMissionDto: CreateMissionDto) {
    return 'This action adds a new mission';
  }

  findAll() {
    return this.prisma.mission.findMany({
      include: {
        formationCenter: true,
        interventions: true,
        contract: true,
        tasks: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.mission.findUnique({
      where: { id },
      include: {
        formationCenter: true,
        interventions: true,
        contract: true,
        tasks: true,
      },
    });
  }

  update(id: string, updateMissionDto: UpdateMissionDto) {
    return this.prisma.mission.update({
      where: { id },
      data: updateMissionDto,
    });
  }

  remove(id: string) {
    return this.prisma.mission.delete({
      where: { id },
    });
  }
}
