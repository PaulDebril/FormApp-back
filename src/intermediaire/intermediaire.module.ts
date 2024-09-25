import { Module } from '@nestjs/common';
import { IntermediaireService } from './intermediaire.service';
import { IntermediaireController } from './intermediaire.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [IntermediaireController],
  providers: [IntermediaireService],
})
export class IntermediaireModule {}
