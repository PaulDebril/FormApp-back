import { PartialType } from '@nestjs/mapped-types';
import { CreateFormationCenterDto } from './create-formation-center.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateFormationCenterDto extends PartialType(
  CreateFormationCenterDto,
) {
  @ApiPropertyOptional()
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
