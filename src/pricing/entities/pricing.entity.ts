import { FormationCenter, Intermediaire, PricingType } from '@prisma/client';

export class Pricing {
  id: string;
  name: string;
  price: number;
  type: PricingType;
  createdAt: Date;
  formationCenter: FormationCenter;
  formationCenterId: string;
  intermediaire: Intermediaire;
  intermediaireId: string;
}
