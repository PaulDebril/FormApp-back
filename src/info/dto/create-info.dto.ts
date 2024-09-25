import { ApiProperty } from '@nestjs/swagger';

export class CreateInfoDto {
  @ApiProperty()
  category: string;
  @ApiProperty()
  formationCenterId: string;
}
