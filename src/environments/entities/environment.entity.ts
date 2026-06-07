import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Project } from '../../projects/entities/project.entity';

@Entity('environments')
export class Environment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50 })
  name: string; 

  @Column({ type: 'varchar', unique: true })
  apiKey: string; 

  @ManyToOne(() => Project, (project) => project.environments, { onDelete: 'CASCADE' })
  project: Project;
}