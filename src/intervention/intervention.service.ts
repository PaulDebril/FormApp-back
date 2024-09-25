import { Injectable } from '@nestjs/common';
import { CreateInterventionDto } from './dto/create-intervention.dto';
import { UpdateInterventionDto } from './dto/update-intervention.dto';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class InterventionService {
  constructor(private prisma: PrismaService) {}
  create(createInterventionDto: CreateInterventionDto) {
    return 'This action adds a new intervention';
  }

  findAll() {
    return `This action returns all intervention`;
  }

  findOne(id: number) {
    return `This action returns a #${id} intervention`;
  }

  update(id: number, updateInterventionDto: UpdateInterventionDto) {
    return `This action updates a #${id} intervention`;
  }

  remove(id: number) {
    return `This action removes a #${id} intervention`;
  }
}
