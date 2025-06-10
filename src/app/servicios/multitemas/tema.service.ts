import { Injectable, OnInit } from '@angular/core';
import { ITema } from './itema-interface';
import { TEMAS } from './tema-config';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TemaService implements OnInit {
  temaActual$ = new BehaviorSubject<ITema>(TEMAS[0]);

  constructor() {
  }
  
  ngOnInit(): void {
  }

  toggleTema() {
    this.temaActual$.next(this.temaActual$.value.name === 'light' ? TEMAS[1] : TEMAS[0]);
  }
}
