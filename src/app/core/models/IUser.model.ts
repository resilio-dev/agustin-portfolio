import { ISkill } from "./ISkill.model";
import { IProject } from "./IProject.model";
import { IJob } from "./IJob.model";


export interface IUser {
  id: number,
  name: string,
  lastName: string,
  age: number | string,
  description: string,
  email: string,
  picture: string,
  projects: IProject[],
  jobs: IJob[],
  skills: ISkill[]
}
