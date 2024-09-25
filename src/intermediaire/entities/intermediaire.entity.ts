import { FormationCenter } from '@prisma/client';

export class Intermediaire {
  id: string;
  enterprise: string;
  entrepriseType: string;
  address: string;
  nafApe: string;
  siret: string;
  logo: string;
  email: string;
  phone: string;
  createdAt: Date;
  formationCenter: FormationCenter;
  formationCenterId: string;
}
