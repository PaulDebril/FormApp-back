import { FormationCenter, MissionState } from '@prisma/client';

export class Mission {
  id: string;
  name: string;
  state: MissionState;
  documents: string[];
  invoices: string[];
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  formationCenter: FormationCenter;
  formationCenterId: string;
}
