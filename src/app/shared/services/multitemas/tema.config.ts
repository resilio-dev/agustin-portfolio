import { ITheme } from './tema.interface';
export const TEMAS: ITheme[] = [
  {
    name: 'light',
    properties: {
      bgPrimaryColor: '#4831d4',
      bgSecondaryColor: '#ccf381',
      primaryTextColor: '#000000ff',
      smallTextSize: '1rem',
      middleTextSize: '1.2rem',
      bigTextSize: '1.5rem',
      cardBgColor: '#ffffff',
      cardTextColor: '#ffffff',
      cardShadowColor: 'rgba(56, 56, 21, 0.05)',
      dangerColor: '#b1bd6cff',
      successColor: '#b1bd6cff',
      neutralColor: '#b1bd6cff',
    }
  },
  {
    name: 'dark',
    properties: {
      bgPrimaryColor: 'black',
      bgSecondaryColor: '#1e1e1e',
      primaryTextColor: '#ccf381',
      smallTextSize: '1rem',
      middleTextSize: '1.2rem',
      bigTextSize: '1.5rem',
      cardBgColor: '#ffffff',
      cardTextColor: '#ffffff',
      cardShadowColor: 'rgba(56, 56, 21, 0.05)',
      dangerColor: '#b1bd6cff',
      successColor: '#b1bd6cff',
      neutralColor: '#b1bd6cff',
    }
  },
];
