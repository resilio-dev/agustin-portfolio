import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPropertiesTheme } from './properties.interface';

@Injectable({ providedIn: 'root' })
export class TemaService {
  private temaActual: 'light' | 'dark' = 'light';
  private temaSubject = new BehaviorSubject<'light' | 'dark'>('light');
  public tema$ = this.temaSubject.asObservable();

  private propiedadesSubject = new BehaviorSubject<IPropertiesTheme>(this.obtenerPropiedadesTema());
  public propiedades$ = this.propiedadesSubject.asObservable();

  constructor() {
    const guardado = localStorage.getItem('theme');
    const preferencia = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const temaInicial = (guardado as 'light' | 'dark') || (preferencia ? 'dark' : 'light');
    this.setTema(temaInicial);
  }

  setTema(tema: 'light' | 'dark') {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(tema);
    this.temaActual = tema;
    localStorage.setItem('theme', tema);
    this.temaSubject.next(tema);
    this.propiedadesSubject.next(this.obtenerPropiedadesTema());
  }

  toggleTema() {
    this.setTema(this.temaActual === 'light' ? 'dark' : 'light');
  }

  getTemaActual(): 'light' | 'dark' {
    return this.temaActual;
  }

  private obtenerPropiedadesTema(): IPropertiesTheme {
    const style = getComputedStyle(document.documentElement);
    return {
      bgPrimaryColor: style.getPropertyValue('--bg-primary-color').trim(),
      bgSecondaryColor: style.getPropertyValue('--bg-secondary-color').trim(),
      primaryTextColor: style.getPropertyValue('--primary-text-color').trim(),
      cardColor: style.getPropertyValue('--card-bg').trim(),
      cardShadowConfig: style.getPropertyValue('--card-shadow-config').trim(),
      linkColor: style.getPropertyValue('--link-color').trim(),
      bigTextSize: style.getPropertyValue('--big-text-size').trim(),
      mediumTextSize: style.getPropertyValue('--medium-text-size').trim(),
      smallTextSize: style.getPropertyValue('--small-text-size').trim(),
    };
  }
}

