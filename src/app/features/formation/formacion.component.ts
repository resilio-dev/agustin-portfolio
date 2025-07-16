import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormacionService } from 'src/app/core/services/formation-service/formacion.service';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from 'src/app/core/services/auth-service/login/login.service';
import { IFormation } from 'src/app/core/models/IFormation.model';
import { CommonModule } from '@angular/common';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { SobreMiComponent } from "./components/about-me/sobre-mi.component";

@Component({
  selector: 'app-formacion',
  standalone: true,
  imports: [CommonModule, ModalComponent, FormsModule, SobreMiComponent],
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.less']
})
export class FormacionComponent {
  formaciones?: IFormation[];
  editFormacion?: IFormation;

  constructor(private formacionService: FormacionService,
    private loginService :LoginService) { }

  obtenerFormaciones() {
    this.formacionService.obtenerFormaciones().subscribe({
      next: (response: IFormation[]) => {
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

  eliminarFormacion() {

    this.formacionService.eliminarFormacion(this.editFormacion?.id || 0).subscribe({
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
