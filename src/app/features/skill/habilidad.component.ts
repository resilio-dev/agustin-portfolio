import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HabilidadService } from 'src/app/core/services/skill-service/habilidad.service';
import { FormsModule } from '@angular/forms';

import { IUser } from 'src/app/core/models/IUser.model';
import { ISkill } from 'src/app/core/models/ISkill.model';
import { UserService } from 'src/app/core/services/user-service/user.service';
import { CommonModule } from '@angular/common';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { SkillFormComponent } from './components/skill-form/skill-form.component';
import { ModalActionsButtonComponent } from 'src/app/shared/components/modal-actions-button/modal-actions-button.component';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-habilidad',
  standalone: true,
  imports: [
    CommonModule,
    ModalComponent,
    FormsModule,
    SkillFormComponent,
    ModalActionsButtonComponent,
    CardComponent,
  ],
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.less'],
})
export class HabilidadComponent implements OnInit {
  habilidades: ISkill[] = [];
  habilidadSeleccionada!: ISkill;
  showModalEdit = false;
  showModalDelete = false;

  constructor(
    private habilidadService: HabilidadService,
    private usuarioService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.obtenerHabildades();
  }

  seleccionarHabilidad(habilidad: ISkill) {
    this.habilidadSeleccionada = habilidad;
  }

  obtenerHabildades() {
    this.habilidadService.obtenerHabilidades().subscribe({
      next: (response: ISkill[]) => {
        this.habilidades = response;
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.error);
      },
    });
  }

  agregarHabilidad(formHab: ISkill) {
    this.habilidadService.agregarHabilidad2(formHab, 1).subscribe({
      next: () => {
        this.toastr.success('New skill creation successfully');
        this.obtenerHabildades();
      },
      error: (error: HttpErrorResponse) => {
        const mensaje =
          error.error?.message || 'Ocurrió un error al crear la nueva skill.';
        this.toastr.error(mensaje, 'Error');
      },
    });
  }

  eliminarHabilidad(id: number) {
    this.habilidadService.eliminarHabilidad(id).subscribe({
      next: () => {
        this.obtenerHabildades();
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.message);
      },
    });
  }

  editarHabilidad(hab: ISkill) {
    this.habilidadService.actualizarHabilidad(hab).subscribe({
      next: () => {
        this.obtenerHabildades();
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.message);
      },
    });
  }

  estaLogeado(): boolean {
    return localStorage.getItem('user') != null;
  }

  showModal(nameModal: string) {
    nameModal === 'edit'
      ? (this.showModalEdit = true)
      : (this.showModalDelete = true);
  }
}
