import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faTrashCan, faPlus, faPencil } from '@fortawesome/free-solid-svg-icons';
import { TrabajoService } from 'src/app/core/services/job-service/trabajo.service';
import { LoginService } from 'src/app/core/services/auth-service/login/login.service';
import { IJob } from 'src/app/core/models/IJob.model';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.less']
})
export class TrabajosComponent {
  trabajos!: IJob[];
  editTrabajo?: IJob;
  agregarIcon = faPlus;
  editarIcon = faPencil;
  eliminarIcon = faTrashCan;

  constructor(private trabajoService: TrabajoService,
    private loginService :LoginService) { }

  obtenerTrabajos() {
    this.trabajoService.obtenerTrabajos().subscribe({
      next: (response: IJob[]) => {
        this.trabajos = response;
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.message);
      }
    })
  }

  agregarTrabajo(formHab: NgForm) {
    this.trabajoService.agregarTrabajo(formHab.value).subscribe({
      next: () => {
        formHab.reset();
        this.obtenerTrabajos();
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.message);
      }
    })
  }

  eliminarTrabajo(id: number) {
    this.trabajoService.eliminarTrabajo(id).subscribe({
      next: () => {
        this.obtenerTrabajos();
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.message);
      }
    })
  }

  editarTrabajo(formHab: NgForm) {
    this.trabajoService.actualizarTrabajo(formHab.value).subscribe({
      next: () => {
        formHab.reset();
        this.obtenerTrabajos();
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.message);
      }
    })
  }

  estaLogeado(): boolean {
    return this.loginService.estaLogeado();
  }
}
