import { FormationCenter } from '@prisma/client';

export class Info {
  id: string;
  category: string;
  formationCenter: FormationCenter;
  formationCenterId: string;
  createdAt: Date;
}
