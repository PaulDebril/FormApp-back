import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateIntermediaireDto {
  @ApiProperty()
  enterprise: string;
  @ApiProperty()
  entrepriseType: string;
  @ApiPropertyOptional()
  address: string;
  @ApiProperty()
  nafApe: string;
  @ApiProperty()
  siret: string;
  @ApiPropertyOptional()
  logo: string;
  @ApiProperty()
  email: string;
  @ApiPropertyOptional()
  phone: string;
  @ApiPropertyOptional()
  formationCenterId: string;
}
