import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateFormationCenterDto {
  @ApiProperty()
  name: string;
  @ApiPropertyOptional()
  address: string;
  @ApiPropertyOptional()
  phone: string;
  @ApiPropertyOptional()
  documents: string[];
  @ApiPropertyOptional()
  logo: string;
}
