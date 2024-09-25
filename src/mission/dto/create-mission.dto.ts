import { MissionState } from '@prisma/client';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateMissionDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  state: MissionState;
  @ApiPropertyOptional()
  documents: string[];
  @ApiPropertyOptional()
  invoices: string[];
  @ApiProperty()
  startDate: Date;
  @ApiProperty()
  endDate: Date;
  @ApiPropertyOptional()
  formationCenterId: string;
}
