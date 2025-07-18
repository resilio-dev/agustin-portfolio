import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/models/IUser.model';
import { FondoIzqComponent } from '../components/fondo-izq/fondo-izq.component';
import { FondoDerComponent } from '../components/fondo-der/fondo-der.component';
import { InfoUserComponent } from '../components/info-user/info-user.component';
import { FotoUserComponent } from '../components/foto-user/foto-user.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FondoIzqComponent,
    FondoDerComponent,
    InfoUserComponent,
    FotoUserComponent,
  ],
  templateUrl: './desktop-home.component.html',
  styleUrls: ['./desktop-home.component.less'],
})
export class DesktopHomeComponent implements OnInit {
  usuario?: IUser;

  constructor() {}

  ngOnInit(): void {
    const aux = localStorage.getItem('user');
    if (aux != null) {
      const usuario :IUser = JSON.parse(aux) as IUser;
      this.usuario = usuario;
    }
  }
}
