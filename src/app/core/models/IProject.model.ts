import { ISkill } from './ISkill.model';

export interface IProject {
  id: number,
  title: string,
  description: string,
  link: string,
  urlImg: string,
  startDate: string,
  endDate: string,
  tecnologies: ISkill[]
}
