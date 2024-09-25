import { Mission } from '@prisma/client';

export class Contract {
  id: string;
  name: string;
  pdf: string;
  createdAt: Date;
  missions: Mission[];
}
