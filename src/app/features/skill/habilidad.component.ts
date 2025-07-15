import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { HabilidadService } from 'src/app/core/services/skill-service/habilidad.service';
import { faTrashCan, faPlus, faPencil } from '@fortawesome/free-solid-svg-icons';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from 'src/app/core/services/auth-service/login/login.service';

import { IUser } from 'src/app/core/models/IUser.model';
import { ISkill } from 'src/app/core/models/ISkill.model';
import { UserService } from 'src/app/core/services/user-service/user.service';
import { CommonModule } from '@angular/common';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'app-habilidad',
  standalone: true,
  imports: [CommonModule, ModalComponent, FormsModule],
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.less']
})
export class HabilidadComponent {
  habilidades :ISkill[] = [];
  eliminarIcon = faTrashCan;
  agregarIcon = faPlus;
  editarIcon = faPencil;
  editHabilidad?: ISkill;
  constructor(private habilidadService :HabilidadService,
    private loginService :LoginService,
    private usuarioService :UserService) { }

  obtenerHabildades() {
    this.habilidadService.obtenerHabilidades().subscribe({
      next: (response :ISkill[]) => {
        this.habilidades = response;
      },
      error: (error :HttpErrorResponse) => {
        console.error(error.message);
      }
    })
  }

  agregarHabilidad(formHab: NgForm) {
    this.usuarioService.obtenerUsuario(1).subscribe({
      next:(response :IUser) => {
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
