import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEnvironmentDto } from './dto/create-environment.dto';
import { UpdateEnvironmentDto } from './dto/update-environment.dto';
import * as crypto from 'crypto';
import { Environment } from './entities/environment.entity';
import { Project } from '../projects/entities/project.entity';

@Injectable()
export class EnvironmentsService {
  constructor(
    @InjectRepository(Environment)
    private readonly environmentRepository: Repository<Environment>,

    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}
  async create(createEnvironmentDto: CreateEnvironmentDto):Promise<Environment> {
    const { name, projectId } = createEnvironmentDto;
    const project = await this.projectRepository.findOneBy({id:projectId});
    if(!project){
      throw new NotFoundException(`El proyecto con ID ${projectId} no existe`)
    }
    const generatedApiKey = `ff_${name.toLowerCase()}_${crypto.randomBytes(16).toString('hex')}`;

    const newEnviroment = this.environmentRepository.create({
      name,apiKey:generatedApiKey,project,
    });
    return await this.environmentRepository.save(newEnviroment);
  }

  async findAll():Promise<Environment[]> {
    return await this.environmentRepository.find({relations:{project:true}});
  }

  findOne(id: number) {
    return `This action returns a #${id} environment`;
  }

  update(id: number, updateEnvironmentDto: UpdateEnvironmentDto) {
    return `This action updates a #${id} environment`;
  }

  remove(id: number) {
    return `This action removes a #${id} environment`;
  }
}
