import {
  Contract,
  FormationCenter,
  Intervention,
  MissionState,
  Task,
} from '@prisma/client';

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
  interventions: Intervention[];
  contract: Contract;
  contractId: string;
  tasks: Task[];
}
