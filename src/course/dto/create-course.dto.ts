import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CourseMode } from '@prisma/client';

export class CreateCourseDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  plan: string;

  @ApiProperty()
  category: string;

  @ApiProperty({ enum: CourseMode })
  mode: CourseMode; 
  @ApiProperty()
  space: string;

  @ApiPropertyOptional()
  createdAt?: Date;

  @ApiPropertyOptional()
  subjectIds?: string[]; 

  @ApiPropertyOptional()
  interventionIds?: string[]; 
}
