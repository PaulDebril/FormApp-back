import {
  FormationCenter,
  Intermediaire,
  Intervention,
  PricingType,
} from '@prisma/client';

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
  interventions: Intervention[];
}
