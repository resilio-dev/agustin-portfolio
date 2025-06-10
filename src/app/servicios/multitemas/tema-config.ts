import { ITema } from './itema-interface';
export const TEMAS: ITema[] = [
  {
    name: 'light',
    properties: {
      colorFuerte: '#4831d4',
      colorDebil: '#ccf381',
      textoPrimario: '#ccf381',
      textoChico: '1rem',
      textoMediano: '1.2rem',
      textoGrande: '1.5rem',
    },
  },
  {
    name: 'dark',
    properties: {
      colorFuerte: 'black',
      colorDebil: '#1e1e1e',
      textoPrimario: '#F9F9F9',
      textoChico: '1.4em',
      textoMediano: '1.6em',
      textoGrande: '2em',
    },
  },
];
