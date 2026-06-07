import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { Environment } from '../../environments/entities/environment.entity';

@Entity('projects') // @Table(name = "projects")
export class Project {
  @PrimaryGeneratedColumn('uuid') // @Id + @GeneratedValue(strategy = GenerationType.UUID)
  id: string;

  @Column({ type: 'varchar', length: 100 }) // @Column(length = 100, nullable = false)
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'varchar', default: 'pending' })
  status: string;

  @CreateDateColumn() // Gestionado automáticamente por el ORM
  createdAt: Date;

  @OneToMany(() => Environment, (environment) => environment.project)
  environments: Environment[];
}