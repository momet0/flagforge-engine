import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProjectsService {
constructor(
    // Equivalente a inyectar tu JpaRepository en Spring Boot
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    // 1. Crea la instancia de la entidad basándose en el DTO (aún no se guarda en BD)
    const newProject = this.projectRepository.create(createProjectDto);
    
    // 2. Lo persiste en PostgreSQL (es un método asíncrono, por eso usamos 'await')
    return await this.projectRepository.save(newProject);
  }

  async findAll(): Promise<Project[]> {
    // Equivalente a projectRepository.findAll() de Spring
    return await this.projectRepository.find();
  }

  async findOne(id: string): Promise<Project> {
    // Equivalente a projectRepository.findById(id)
    const project = await this.projectRepository.findOneBy({ id });
    
    if (!project) {
      throw new NotFoundException(`Proyecto con ID ${id} no encontrado`);
    }
    
    return project;
  }
}
