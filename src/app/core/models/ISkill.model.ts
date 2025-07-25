export interface ISkill {
  id: number,
  name: string,
  description: string,
  urlLogo: string,
  type: 'FRAMEWORK' | 'LIBRARY' | 'HOSTING' | 'SOFTWARE' | 'LANGUAGE' | 'OTROS',
  isLearning: boolean
}