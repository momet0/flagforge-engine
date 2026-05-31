import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

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
}