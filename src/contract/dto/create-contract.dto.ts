import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateContractDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  pdf: string;

  @ApiPropertyOptional()
  missionIds: string[];
}
