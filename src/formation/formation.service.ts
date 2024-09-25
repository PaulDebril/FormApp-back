import { Injectable } from '@nestjs/common';
import { CreateFormationDto } from './dto/create-formation.dto';
import { UpdateFormationDto } from './dto/update-formation.dto';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class FormationService {
  constructor(private prisma: PrismaService) {}
  create(createFormationDto: CreateFormationDto) {
    return 'This action adds a new formation';
  }

  findAll() {
    return `This action returns all formation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} formation`;
  }

  update(id: number, updateFormationDto: UpdateFormationDto) {
    return `This action updates a #${id} formation`;
  }

  remove(id: number) {
    return `This action removes a #${id} formation`;
  }
}
