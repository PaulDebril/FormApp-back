import { FormationCenter, Intermediaire, Intervention } from '@prisma/client';

export class Contact {
  id: string;
  name: string;
  photo: string | null;
  email: string;
  phone: string;
  role: string;
  linkedin: string | null;
  comment: string | null;
  createdAt: Date;
  formationCenter?: FormationCenter;
  formationCenterId?: string;
  intermediaire?: Intermediaire;
  intermediaireId?: string;
  interventions: Intervention[];
}
