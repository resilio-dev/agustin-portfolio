import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IFormation } from 'src/app/core/models/IFormation.model';
import { FormationFormBuilderService } from '../../services/formation-form-builder.service';
import { CommonModule } from '@angular/common';
import { FormActionsButtonComponent } from 'src/app/shared/components/form-actions-button/form-actions-button.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { Observable } from 'rxjs';
import { ISkill } from 'src/app/core/models/ISkill.model';
import { SkillDataService } from 'src/app/core/services/skill-data-service/skill-data.service';

@Component({
  selector: 'app-formation-form',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormActionsButtonComponent,
    NgSelectModule,
  ],
  templateUrl: './formation-form.component.html',
  styleUrl: './formation-form.component.less',
})
export class FormationFormComponent {
  @Input() formationData: Partial<IFormation> | null = null;
  @Output() formSubmitted = new EventEmitter<IFormation>();
  @Output() formCancel = new EventEmitter<void>();

  skills$!: Observable<ISkill[]>;
  formationForm!: FormGroup;
  showId = false;

  constructor(
    private formBuilderService: FormationFormBuilderService,
    private skillDataService: SkillDataService
  ) {}

  ngOnInit(): void {
    this.formationForm = this.formBuilderService.build(
      this.formationData ?? {}
    );
    this.skills$ = this.skillDataService.skills$;
  }

  submit(): void {
    if (this.formationForm.valid) {
      const formation: IFormation = {
        id: this.formationForm.get('id')?.value,
        title: this.formationForm.get('title')?.value,
        description: this.formationForm.get('description')?.value,
        startDate: this.formationForm.get('starDate')?.value,
        endDate: this.formationForm.get('endDate')?.value,
        technologies: this.formationForm.get('technologies')?.value,
        type: this.formationForm.get('type')?.value,
        academy: this.formationForm.get('academy')?.value,
      };
      this.formSubmitted.emit(this.formationForm.value);
      this.formationForm.reset();
    } else {
      this.formationForm.markAllAsTouched();
    }
  }
  cancel() {
    this.formCancel.emit();
  }
}
