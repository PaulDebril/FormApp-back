import { Injectable } from '@nestjs/common';
import { CreateIntermediaireDto } from './dto/create-intermediaire.dto';
import { UpdateIntermediaireDto } from './dto/update-intermediaire.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class IntermediaireService {
  constructor(private prisma: PrismaService) {}
  create(createIntermediaireDto: CreateIntermediaireDto) {
    return this.prisma.intermediaire.create({
      data: createIntermediaireDto,
    });
  }

  findAll() {
    return this.prisma.intermediaire.findMany();
  }

  findOne(id: string) {
    return this.prisma.intermediaire.findUnique({
      where: { id },
    });
  }

  update(id: string, updateIntermediaireDto: UpdateIntermediaireDto) {
    return this.prisma.intermediaire.update({
      where: { id },
      data: updateIntermediaireDto,
    });
  }

  remove(id: string) {
    return this.prisma.intermediaire.delete({
      where: { id },
    });
  }
}
