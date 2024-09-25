import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateInterventionDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  studentNumber: number;

  @ApiPropertyOptional()
  formationCenterId?: string;

  @ApiPropertyOptional()
  missionId?: string;

  @ApiPropertyOptional()
  subjectId?: string;

  @ApiPropertyOptional()
  courseId?: string;

  @ApiPropertyOptional()
  contactId?: string;

  @ApiPropertyOptional()
  intermediaireId?: string;

  @ApiPropertyOptional()
  pricingId?: string;
}
