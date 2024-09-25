import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { FormationLevel } from '@prisma/client';

export class CreateFormationDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  url: string;

  @ApiProperty({ enum: FormationLevel })
  level: FormationLevel;

  @ApiPropertyOptional()
  documents?: string[];

  @ApiPropertyOptional()
  formationCenterId?: string;

  @ApiPropertyOptional()
  subjectIds?: string[];
}
