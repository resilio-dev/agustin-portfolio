import { ISkill } from './ISkill.model';

export interface IJob {
  id: number,
  title: string,
  description: string,
  startDate: string,
  endDate: string,
  urlImg: string,
  technologies: ISkill[],
}
