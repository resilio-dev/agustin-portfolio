import { ISkill } from './ISkill.model';

export interface IJob {
  id: number;
  job: string;
  description: string;
  linkJob?: string;
  initialDate: string;
  finalDate: string;
  imgSrc: string;
  tecnologies: ISkill[];
}
