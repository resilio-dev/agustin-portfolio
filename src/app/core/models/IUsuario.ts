import { IProject } from "src/app/features/projects/models/IProject.interface";

export interface IUsuario {
  id: number,
  nombre: string,
  apellido: string,
  edad: number,
  descripcion: string,
  email: string,
  foto: string,
  projects: IProject[]
}
