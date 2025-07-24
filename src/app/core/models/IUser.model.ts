import { ISkill } from "./ISkill.model";
import { IProject } from "./IProject.model";
import { IJob } from "./IJob.model";
import { IFormation } from "./IFormation.model";


export interface IUser {
  id: number,
  name: string,
  lastName: string,
  title: string,
  mainPhrase: string,
  secondaryPhrase: string,
  age: number,
  description: string,
  yearsXP: number,
  email: string,
  urlImg: string,
  urlCV: string,
  projects: IProject[],
  jobs: IJob[],
  formations: IFormation[],
  skills: ISkill[]
}
