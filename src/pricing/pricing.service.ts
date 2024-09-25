import { Injectable } from '@nestjs/common';
import { CreatePricingDto } from './dto/create-pricing.dto';
import { UpdatePricingDto } from './dto/update-pricing.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PricingService {
  constructor(private prisma: PrismaService) {}
  create(createPricingDto: CreatePricingDto) {
    return this.prisma.pricing.create({
      data: createPricingDto,
    });
  }

  findAll() {
    return this.prisma.pricing.findMany();
  }

  findOne(id: string) {
    return this.prisma.pricing.findUnique({
      where: { id },
    });
  }

  update(id: string, updatePricingDto: UpdatePricingDto) {
    return this.prisma.pricing.update({
      where: { id },
      data: updatePricingDto,
    });
  }

  remove(id: string) {
    return this.prisma.pricing.delete({
      where: { id },
    });
  }
}
