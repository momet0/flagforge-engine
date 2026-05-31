import { Controller, Get, Post, Body,HttpCode,HttpStatus } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
//import { UpdateProjectDto } from './dto/update-project.dto';

@Controller('projects')
export class ProjectsController {
constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED) // Fuerza un 201 (aunque ya es el default de POST)
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectsService.create(createProjectDto);
  }

  @Get()
  findAll() {
    return this.projectsService.findAll(); // Devuelve 200 OK automáticamente
  }
}
