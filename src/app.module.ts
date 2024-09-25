import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { FormationCenterModule } from './formation-center/formation-center.module';

@Module({
  imports: [PrismaModule, FormationCenterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
