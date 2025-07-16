import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/models/IUser.model';
import { UserService } from 'src/app/core/services/user-service/user.service';
import { HabilidadComponent } from '../../../skill/habilidad.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [CommonModule, HabilidadComponent],
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.less']
})
export class SobreMiComponent implements OnInit {
  tema :any;
  usuario?: IUser;
  constructor(private usuarioService: UserService) { }

  ngOnInit(): void {
    this.tema = {
      name: 'light',
      properties: {
        colorFuerte: 'black',
        colorDebil: 'light'
      }
    }
  }


  obtenerUsuario() {
    this.usuarioService.obtenerUsuario(1).subscribe({
      next: (response: IUser) => {
        this.usuario = response;
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.message)
      }
    })
  }

  calcularEdad(fechaNac: string) {
    const hoy: Date = new Date();
    const fechaNacimiento: Date = new Date(fechaNac);
    let edad: number = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes: number = hoy.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }
    return edad;
  }
}
