import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateContactDto {
  @ApiProperty()
  name: string;

  @ApiPropertyOptional()
  photo: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  role: string;

  @ApiPropertyOptional()
  linkedin: string;

  @ApiPropertyOptional()
  comment: string;

  @ApiPropertyOptional()
  formationCenterId?: string;

  @ApiPropertyOptional()
  intermediaireId?: string;

  @ApiPropertyOptional()
  interventionIds?: string[];
}
