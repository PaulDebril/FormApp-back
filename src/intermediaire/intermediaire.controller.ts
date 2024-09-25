import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IntermediaireService } from './intermediaire.service';
import { CreateIntermediaireDto } from './dto/create-intermediaire.dto';
import { UpdateIntermediaireDto } from './dto/update-intermediaire.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Intermediaire')
@Controller('intermediaire')
export class IntermediaireController {
  constructor(private readonly intermediaireService: IntermediaireService) {}

  @Post()
  create(@Body() createIntermediaireDto: CreateIntermediaireDto) {
    return this.intermediaireService.create(createIntermediaireDto);
  }

  @Get()
  findAll() {
    return this.intermediaireService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.intermediaireService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIntermediaireDto: UpdateIntermediaireDto,
  ) {
    return this.intermediaireService.update(id, updateIntermediaireDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.intermediaireService.remove(id);
  }
}
