import {
  Contact,
  Formation,
  Intermediaire,
  Intervention,
  Pricing,
  Info,
  Mission,
  Subject,
} from '@prisma/client';

export class FormationCenter {
  id: string;
  name: string;
  address: string;
  phone: string;
  documents: string[];
  logo: string;
  createdAt: Date;
  contacts: Contact[];
  formations: Formation[];
  intermediaires: Intermediaire[];
  interventions: Intervention[];
  pricings: Pricing[];
  Info: Info[];
  Mission: Mission[];
  Subject: Subject[];
}
