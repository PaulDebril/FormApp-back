import { Injectable } from '@nestjs/common';
import { CreateInfoDto } from './dto/create-info.dto';
import { UpdateInfoDto } from './dto/update-info.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class InfoService {
  constructor(private prisma: PrismaService) {}
  create(createInfoDto: CreateInfoDto) {
    return this.prisma.info.create({
      data: createInfoDto,
    });
  }

  findAll() {
    return this.prisma.info.findMany();
  }

  findOne(id: string) {
    return this.prisma.info.findUnique({
      where: { id },
    });
  }

  update(id: string, updateInfoDto: UpdateInfoDto) {
    return this.prisma.info.update({
      where: { id },
      data: updateInfoDto,
    });
  }

  remove(id: string) {
    return this.prisma.info.delete({
      where: { id },
    });
  }
}
