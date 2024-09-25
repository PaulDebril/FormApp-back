import {
  Course,
  Formation,
  FormationCenter,
  FormationLevel,
  Intervention,
} from '@prisma/client';

export class Subject {
  id: string;
  name: string;
  program: string;
  createdAt: Date;
  level: FormationLevel;
  formationCenter: FormationCenter;
  formationCenterId: string;
  course: Course;
  courseId: string;
  formation: Formation;
  formationId: string;
  interventions: Intervention[];
}
