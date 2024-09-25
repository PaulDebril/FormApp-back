import { Mission, TaskPriority } from '@prisma/client';

export class Task {
  id: string;
  name: string;
  priority: TaskPriority;
  deadline: Date;
  createdAt: Date;
  mission: Mission;
  missionId: string;
}
