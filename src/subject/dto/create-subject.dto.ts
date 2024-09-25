import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { FormationLevel } from '@prisma/client';

export class CreateSubjectDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  program: string;
  @ApiProperty({ enum: FormationLevel })
  level: FormationLevel;
  @ApiPropertyOptional()
  courseId?: string;
  @ApiPropertyOptional()
  formationId?: string;
  @ApiPropertyOptional()
  formationCenterId?: string;
  @ApiPropertyOptional()
  interventionIds?: string[];
}
