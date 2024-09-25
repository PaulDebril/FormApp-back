import { FormationCenter, FormationLevel } from '@prisma/client';

export class Subject {
  id: string;
  name: string;
  program: string;
  createdAt: Date;
  level: FormationLevel;
  formationCenter: FormationCenter;
  formationCenterId: string;
}
