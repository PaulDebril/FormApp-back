import { FormationCenter, Subject, FormationLevel } from '@prisma/client';

export class Formation {
  id: string;
  name: string;
  url: string;
  level: FormationLevel;
  documents: string[];
  createdAt: Date;
  formationCenter?: FormationCenter;
  formationCenterId?: string;
  subjects: Subject[];
}
