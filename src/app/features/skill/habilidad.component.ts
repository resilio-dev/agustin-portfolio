import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { HabilidadService } from 'src/app/core/services/skill-service/habilidad.service';
import { FormsModule } from '@angular/forms';
import { ISkill } from 'src/app/core/models/ISkill.model';
import { CommonModule } from '@angular/common';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { SkillFormComponent } from './components/skill-form/skill-form.component';
import { ModalActionsButtonComponent } from 'src/app/shared/components/modal-actions-button/modal-actions-button.component';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { ToastrService } from 'ngx-toastr';
import { AppDataService } from 'src/app/core/services/app-data-service/app-data.service';

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
  @Input() isLogged!:boolean;
  habilidades: ISkill[] = [];
  habilidadSeleccionada!: ISkill;
  showModalEdit = false;
  showModalDelete = false;

  constructor(
    private habilidadService: HabilidadService,
    private toastr: ToastrService,
    private appDataService: AppDataService
  ) {}

  ngOnInit(): void {
    this.habilidades = this.appDataService.getSkills();
  }

  seleccionarHabilidad(habilidad: ISkill) {
    this.habilidadSeleccionada = habilidad;
  }

  obtenerHabildades() {
    this.habilidadService.obtenerHabilidades().subscribe({
      next: (response: ISkill[]) => {
        this.habilidades = response;
      },
      error: (er: HttpErrorResponse) => {
        const error = er.error.message || 'We cannot load skills at this time.';
        this.toastr.error(error);
      },
    });
  }

  agregarHabilidad(formHab: ISkill) {
    this.habilidadService.agregarHabilidad2(formHab, 1).subscribe({
      next: () => {
        this.toastr.success('Created new skill');
        this.obtenerHabildades();
      },
      error: (error: HttpErrorResponse) => {
        const mensaje =
          error.error?.message ||
          'An error ocurred while the skill was creating.';
        this.toastr.error(mensaje, 'Error');
      },
    });
  }

  eliminarHabilidad(id: number) {
    this.habilidadService.eliminarHabilidad(id).subscribe({
      next: () => {
        this.toastr.success(
          'Skill with ID ' + id + ' deleted.',
          'Submitted Skill'
        );
      },
      error: (err: HttpErrorResponse) => {
        const error =
          err.error?.message ||
          'An error ocurred while the skill was deleting.';
        this.toastr.error(error);
      },
    });
  }

  editarHabilidad(hab: ISkill) {
    this.habilidadService.actualizarHabilidad(hab).subscribe({
      next: () => {
        this.toastr.success('Updated skill.', 'Submitted Skill');
      },
      error: (err: HttpErrorResponse) => {
        const error =
          err.error?.message ||
          'An error ocurred while the skill was updating.';
        this.toastr.error(error);
      },
    });
  }
}
