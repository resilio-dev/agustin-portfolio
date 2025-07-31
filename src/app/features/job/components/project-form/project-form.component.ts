import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IProject } from 'src/app/core/models/IProject.model';
import { ProjectFormBuilderService } from '../../services/project-form-builder.service';
import { SkillDataService } from 'src/app/core/services/skill-data-service/skill-data.service';
import { Observable } from 'rxjs';
import { ISkill } from 'src/app/core/models/ISkill.model';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormActionsButtonComponent } from 'src/app/shared/components/form-actions-button/form-actions-button.component';

@Component({
  selector: 'app-project-form',
  imports: [CommonModule, ReactiveFormsModule, NgSelectModule, FormActionsButtonComponent],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.less',
})
export class ProjectFormComponent {
  @Input() projectData: (IProject & { skillsDetails: ISkill[] }) | null = null;
  @Output() formSubmitted = new EventEmitter<IProject>();
  @Output() formCancel = new EventEmitter<void>();

  projectForm!: FormGroup;
  showId = false;
  skills$!: Observable<ISkill[]>;

  constructor(private formBuilderService: ProjectFormBuilderService, private skillDataService: SkillDataService) {
  }
  
  ngOnInit(): void {
    this.projectForm = this.formBuilderService.build(this.projectData ?? {});
    this.skills$ = this.skillDataService.skills$;

    if (this.projectData?.skillsDetails) {
      const selectedIds = this.projectData.skillsDetails.map((s) => s.id);
      this.projectForm.get('technologies')?.setValue(selectedIds);
    }
  }

  submit(): void {
    if (this.projectForm.valid) {
      const project :IProject = {
        id: this.projectForm.get('id')?.value,
        title: this.projectForm.get('title')?.value,
        description: this.projectForm.get('description')?.value,
        startDate: this.projectForm.get('startDate')?.value,
        endDate: this.projectForm.get('endDate')?.value,
        tecnologies: this.projectForm.get('technologies')?.value,
        link: this.projectForm.get('link')?.value,
        urlImg: this.projectForm.get('urlImg')?.value
      }
      this.formSubmitted.emit(project);
      this.projectForm.reset();
    } else {
      this.projectForm.markAllAsTouched();
    }
  }

  cancel() {
    this.formCancel.emit();
    this.projectForm.reset();
  }
}
