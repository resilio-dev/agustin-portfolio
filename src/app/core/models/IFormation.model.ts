export interface IFormation {
  id: number,
  startDate: string,
  endDate: string,
  title: string,
  description: string,
  type: 'FORMACION_FORMAL' | 'CURSO' | 'AUTODIDACTA' | 'OTRO',
  academy: string
}