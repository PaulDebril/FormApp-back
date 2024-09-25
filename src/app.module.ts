import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { FormationCenterModule } from './formation-center/formation-center.module';
import { InfoModule } from './info/info.module';
import { IntermediaireModule } from './intermediaire/intermediaire.module';

@Module({
  imports: [
    PrismaModule,
    FormationCenterModule,
    InfoModule,
    IntermediaireModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
