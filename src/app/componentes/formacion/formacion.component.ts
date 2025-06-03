import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { IFormacion } from 'src/app/modelos/IFormacion';
import { FormacionService } from 'src/app/servicios/api/formacion.service';
import { faTrashCan, faPlus, faPencil } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login/login.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.less']
})
export class FormacionComponent {
  formaciones?: IFormacion[];
  editFormacion?: IFormacion;
  agregarIcon = faPlus;
  editarIcon = faPencil;
  eliminarIcon = faTrashCan;

  constructor(private formacionService: FormacionService,
    private loginService :LoginService) { }

  obtenerFormaciones() {
    this.formacionService.obtenerFormaciones().subscribe({
      next: (response: IFormacion[]) => {
        this.formaciones = response;
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.message);
      }
    })
  }

  agregarFormacion(formHab: NgForm) {
    this.formacionService.agregarFormacion(formHab.value).subscribe({
      next: () => {
        formHab.reset();
        this.obtenerFormaciones();
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.message);
      }
    })
  }

  eliminarFormacion(id: number) {
    this.formacionService.eliminarFormacion(id).subscribe({
      next: () => {
        this.obtenerFormaciones();
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.message);
      }
    })
  }

  editarFormacion(formHab: NgForm) {
    this.formacionService.actualizarFormacion(formHab.value).subscribe({
      next: () => {
        formHab.reset();
        this.obtenerFormaciones();
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
