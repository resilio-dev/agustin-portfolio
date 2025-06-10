import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { IHabilidad } from 'modelos/IHabilidad';
import { HabilidadService } from 'src/app/servicios/api/habilidad.service';
import { faTrashCan, faPlus, faPencil } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login/login.service';
import { UsuarioService } from 'src/app/servicios/api/usuario.service';
import { IUsuario } from 'modelos/IUsuario';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.less']
})
export class HabilidadComponent {
  habilidades :IHabilidad[] = [];
  eliminarIcon = faTrashCan;
  agregarIcon = faPlus;
  editarIcon = faPencil;
  editHabilidad?: IHabilidad;
  constructor(private habilidadService :HabilidadService,
    private loginService :LoginService,
    private usuarioService :UsuarioService) { }

  obtenerHabildades() {
    this.habilidadService.obtenerHabilidades().subscribe({
      next: (response :IHabilidad[]) => {
        this.habilidades = response;
      },
      error: (error :HttpErrorResponse) => {
        console.error(error.message);
      }
    })
  }

  agregarHabilidad(formHab: NgForm) {
    this.usuarioService.obtenerUsuario().subscribe({
      next:(response :IUsuario) => {
        this.habilidadService.agregarHabilidad2(formHab.value, response.id).subscribe({
          next: () => {
            formHab.reset();
            this.obtenerHabildades();
          },
          error: (error: HttpErrorResponse) => {
            console.error(error.message);
          }
        })
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.message);
      }
    })
  }

  eliminarHabilidad(id: number) {
    this.habilidadService.eliminarHabilidad(id).subscribe({
      next: () => {
        this.obtenerHabildades();
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.message);
      }
    })
  }

  editarHabilidad(formHab: NgForm) {
    this.habilidadService.actualizarHabilidad(formHab.value).subscribe({
      next: () => {
        formHab.reset();
        this.obtenerHabildades();
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.message);
      }
    })
  }

  estaLogeado():boolean {
    return this.loginService.estaLogeado();
  }
}
