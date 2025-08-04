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
    document.body.setAttribute("theme", tema);
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
      bgPrimaryBColor: style.getPropertyValue('--bg-primary-b-color').trim(),
      bgSecondaryColor: style.getPropertyValue('--bg-secondary-color').trim(),
      primaryTextColor: style.getPropertyValue('--primary-text-color').trim(),
      bigTextSize: style.getPropertyValue('--big-text-size').trim(),
      middleTextSize: style.getPropertyValue('--middle-text-size').trim(),
      smallTextSize: style.getPropertyValue('--small-text-size').trim(),
      cardBgColor: style.getPropertyValue('--card-bg-color').trim(),
      cardTextColor: style.getPropertyValue('--card-text-color').trim(),
      cardShadowColor: style.getPropertyValue('--card-shadow-color').trim(),
      dangerColor: style.getPropertyValue('--danger-color').trim(),
      successColor: style.getPropertyValue('--success-color').trim(),
      neutralColor: style.getPropertyValue('--neutral-color').trim(),
    };
  }
}

