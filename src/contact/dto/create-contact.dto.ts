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
  formationCenterId?: string; // Optional, since it could be null

  @ApiPropertyOptional()
  intermediaireId?: string; // Optional, since it could be null

  @ApiPropertyOptional()
  interventionIds?: string[]; // Assuming you're linking interventions by their IDs

  @ApiPropertyOptional()
  createdAt?: Date; // Optional, to allow setting a custom creation date
}
