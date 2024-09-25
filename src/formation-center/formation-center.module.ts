import { Module } from '@nestjs/common';
import { FormationCenterService } from './formation-center.service';
import { FormationCenterController } from './formation-center.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [FormationCenterController],
  providers: [FormationCenterService],
})
export class FormationCenterModule {}
