import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { FormationCenterModule } from './formation-center/formation-center.module';
import { InfoModule } from './info/info.module';
import { IntermediaireModule } from './intermediaire/intermediaire.module';
import { MissionModule } from './mission/mission.module';
import { FormationModule } from './formation/formation.module';
import { ContactModule } from './contact/contact.module';
import { CourseModule } from './course/course.module';
import { PricingModule } from './pricing/pricing.module';
import { SubjectModule } from './subject/subject.module';
import { TaskModule } from './task/task.module';
import { InterventionModule } from './intervention/intervention.module';
import { ContractModule } from "./contract/contract.module";

@Module({
  imports: [
    PrismaModule,
    FormationCenterModule,
    InfoModule,
    IntermediaireModule,
    InterventionModule,
    MissionModule,
    FormationModule,
    ContactModule,
    CourseModule,
    MissionModule,
    PricingModule,
    SubjectModule,
    TaskModule,
    ContractModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
