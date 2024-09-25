import { Intervention, Subject, CourseMode } from '@prisma/client';

export class Course {
  id: string;
  name: string;
  plan: string;
  category: string;
  mode: CourseMode;
  space: string;
  createdAt: Date;
  subjects: Subject[];
  interventions: Intervention[];
}
