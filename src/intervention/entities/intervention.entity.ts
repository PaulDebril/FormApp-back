import {
  FormationCenter,
  Intermediaire,
  Pricing,
  Mission,
  Subject,
  Course,
} from '@prisma/client';
export class Intervention {
  id: string;
  name: string;
  date: Date;
  studentNumber: number;
  createdAt: Date;
  FormationCenter: FormationCenter;
  formationCenterId: string;
  Mission: Mission;
  missionId: string;
  Subject: Subject;
  subjectId: string;
  Course: Course;
  courseId: string;
  intermediaire: Intermediaire;
  intermediaireId: string;
  pricing: Pricing;
  pricingId: string;
}
