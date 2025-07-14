import { ISkill } from './ISkill.model';

export interface IProject {
  id: number;
  title: string;
  imgSrc: string;
  description: string;
  linkDemo: string;
  creationDate: string;
  tecnologies: ISkill[];
}
