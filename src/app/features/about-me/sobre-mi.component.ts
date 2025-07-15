import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { IUser } from 'src/app/core/models/IUser.model';
import { faPencil, faTrashCan, faPlus } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/core/services/user-service/user.service';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [],
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.less']
})
export class SobreMiComponent {
  edit = faPencil;
  remove = faTrashCan;
  add = faPlus;

  usuario?: IUser;
  constructor(private usuarioService: UserService) { }


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
