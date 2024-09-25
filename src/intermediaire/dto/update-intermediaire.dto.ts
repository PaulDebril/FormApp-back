import { PartialType } from '@nestjs/swagger';
import { CreateIntermediaireDto } from './create-intermediaire.dto';

export class UpdateIntermediaireDto extends PartialType(
  CreateIntermediaireDto,
) {}
