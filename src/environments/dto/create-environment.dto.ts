import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';

export class CreateEnvironmentDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 50, { message: 'El nombre del entorno debe tener entre 3 y 50 caracteres' })
  name: string;

  @IsUUID('4', { message: 'El projectId debe ser un UUID válido' })
  @IsNotEmpty()
  projectId: string; 
}