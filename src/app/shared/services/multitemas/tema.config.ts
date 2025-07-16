import { ITheme } from './tema.interface';
export const TEMAS: ITheme[] = [
  {
    name: 'light',
    properties: {
      bgPrimaryColor: '#4831d4',
      bgSecondaryColor: '#ccf381',
      primaryTextColor: '#ccf381',
      smallTextSize: '1rem',
      mediumTextSize: '1.2rem',
      bigTextSize: '1.5rem',
      cardColor: '#ffffff',
      cardShadowConfig: '0 2px 8px rgba(56, 56, 21, 0.05)',
      linkColor: '#b1bd6cff',
    },
  },
  {
    name: 'dark',
    properties: {
      bgPrimaryColor: 'black',
      bgSecondaryColor: '#1e1e1e',
      primaryTextColor: '#F9F9F9',
      smallTextSize: '1.4em',
      mediumTextSize: '1.6em',
      bigTextSize: '2em',
      cardColor: '#777575ff',
      cardShadowConfig: '0 2px 8px rgba(0, 0, 0, 0.05)',
      linkColor: '#a4a1d1ff',
    },
  },
];
