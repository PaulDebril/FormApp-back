import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PricingType } from '@prisma/client';

export class CreatePricingDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  price: number;

  @ApiProperty({ enum: PricingType })
  type: PricingType;

  @ApiPropertyOptional()
  formationCenterId?: string;

  @ApiPropertyOptional()
  intermediaireId?: string;

  @ApiPropertyOptional()
  interventionIds?: string[];
}
