import {
  FormationCenter,
  Intermediaire,
  Pricing,
  Mission,
  Subject,
  Course,
  Contact,
} from '@prisma/client';
export class Intervention {
  id: string;
  name: string;
  date: Date;
  studentNumber: number;
  createdAt: Date;
  FormationCenter: FormationCenter | null;
  formationCenterId: string;
  Mission: Mission | null;
  missionId: string | null;
  Subject: Subject | null;
  subjectId: string | null;
  Course: Course | null;
  courseId: string | null;
  intermediaire: Intermediaire | null;
  intermediaireId: string | null;
  pricing: Pricing | null;
  pricingId: string | null;
  contact: Contact | null;
  contactId: string | null;
}
