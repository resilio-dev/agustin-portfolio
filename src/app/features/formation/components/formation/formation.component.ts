import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IFormation } from 'src/app/core/models/IFormation.model';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { HttpErrorResponse } from '@angular/common/module.d-CnjH8Dlt';
import { FormacionService } from 'src/app/core/services/formation-service/formacion.service';
import { FormationFormComponent } from '../formation-form/formation-form.component';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/core/services/auth-service/login/login.service';
import { combineLatest, map, Observable } from 'rxjs';
import { ISkill } from 'src/app/core/models/ISkill.model';
import { FormationDataService } from 'src/app/core/services/formation-data-service/formation-data.service';
import { SkillDataService } from 'src/app/core/services/skill-data-service/skill-data.service';

@Component({
  selector: 'app-formation',
  imports: [
    CommonModule,
    ModalComponent,
    FormationFormComponent,
    CardComponent,
  ],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.less',
})
export class FormationComponent implements OnInit {
  formations$!: Observable<(IFormation & { skillsDetails: ISkill[] })[]>;
  formacionSeleccionada!: IFormation;

  constructor(
    private formService: FormacionService,
    private loginService: LoginService,
    private toastr: ToastrService,
    private formationDataService: FormationDataService,
    private skillDataService: SkillDataService
  ) {}

  ngOnInit(): void {
    this.formations$ = combineLatest([
      this.formationDataService.formations$,
      this.skillDataService.skills$,
    ]).pipe(
      map(([formations, skills]) =>
        formations.map((f) => ({
          ...f,
          skillsDetails: skills.filter((h) => f.technologies.includes(h.id)),
        }))
      )
    );
  }

  eliminarFormacion(id: number) {
    this.formService.eliminarFormacion(id).subscribe({
      next: () => {
        this.toastr.success(
          'Formation with ID ' + id + ' deleted.',
          'Submitted Form'
        );
      },
      error: (err: HttpErrorResponse) => {
        const error =
          err.error?.message ||
          'An error ocurred while the formation was deleting.';
        this.toastr.error(error);
      },
    });
  }
  editarFormacion(form: IFormation) {
    this.formService.actualizarFormacion(form).subscribe({
      next: () => {
        this.toastr.success('Updated formation.', 'Submitted Form');
      },
      error: (err: HttpErrorResponse) => {
        const error =
          err.error?.message ||
          'An error ocurred while the formation was updating.';
        this.toastr.error(error);
      },
    });
  }

  agregarFormacion(form: IFormation) {
    this.formService.agregarFormacion(form).subscribe({
      next: () => {
        this.toastr.success('Created new formation.', 'Submitted Form');
      },
      error: (err: HttpErrorResponse) => {
        const error =
          err.error?.message ||
          'An error ocurred while the formation was creating.';
        this.toastr.error(error);
      },
    });
  }

  seleccionarFormacion(form: IFormation) {
    this.formacionSeleccionada = form;
  }

  isLogin(): boolean {
    return this.loginService.isLogin();
  }
}
