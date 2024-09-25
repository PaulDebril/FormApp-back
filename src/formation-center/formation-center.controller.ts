import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FormationCenterService } from './formation-center.service';
import { CreateFormationCenterDto } from './dto/create-formation-center.dto';
import { UpdateFormationCenterDto } from './dto/update-formation-center.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('FormationCenter')
@Controller('formation-center')
export class FormationCenterController {
  constructor(
    private readonly formationCenterService: FormationCenterService,
  ) {}

  @Post()
  create(@Body() createFormationCenterDto: CreateFormationCenterDto) {
    return this.formationCenterService.create(createFormationCenterDto);
  }

  @Get()
  findAll() {
    return this.formationCenterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.formationCenterService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFormationCenterDto: UpdateFormationCenterDto,
  ) {
    return this.formationCenterService.update(id, updateFormationCenterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formationCenterService.remove(id);
  }
}
