import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IFormation } from 'src/app/core/models/IFormation.model';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { FormationFormComponent } from '../formation-form/formation-form.component';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { LoginService } from 'src/app/core/services/auth-service/login/login.service';
import { combineLatest, map, Observable } from 'rxjs';
import { ISkill } from 'src/app/core/models/ISkill.model';
import { FormationDataService } from 'src/app/core/services/formation-data-service/formation-data.service';
import { SkillDataService } from 'src/app/core/services/skill-data-service/skill-data.service';
import { ModalActionsButtonComponent } from 'src/app/shared/components/modal-actions-button/modal-actions-button.component';

@Component({
  selector: 'app-formation',
  imports: [
    CommonModule,
    ModalComponent,
    FormationFormComponent,
    CardComponent,
    ModalActionsButtonComponent
  ],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.less',
})
export class FormationComponent implements OnInit {
  formations$!: Observable<(IFormation & { skillsDetails: ISkill[] })[]>;
  formacionSeleccionada!: (IFormation & { skillsDetails: ISkill[] });

  constructor(
    private loginService: LoginService,
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
    this.formationDataService.deleteFormation(id);
  }
  editarFormacion(form: IFormation) {
    this.formationDataService.updateFormation(form);
  }

  agregarFormacion(form: IFormation) {
    this.formationDataService.addFormation(form);
  }

  seleccionarFormacion(form: (IFormation & { skillsDetails: ISkill[] })) {
    this.formacionSeleccionada = form;
  }

  isLogin(): boolean {
    return this.loginService.isLogin();
  }
}
