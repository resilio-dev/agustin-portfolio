import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormsModule } from '@angular/forms';
import { JobFormBuilderService } from '../../services/job-form-builder.service';
import { IJob } from 'src/app/core/models/IJob.model';
import { FormActionsButtonComponent } from 'src/app/shared/components/form-actions-button/form-actions-button.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { Observable } from 'rxjs';
import { ISkill } from 'src/app/core/models/ISkill.model';
import { SkillDataService } from 'src/app/core/services/skill-data-service/skill-data.service';

@Component({
  selector: 'app-job-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormActionsButtonComponent,
    NgSelectModule
  ],
  styleUrl: './job-form.component.less',
  templateUrl: './job-form.component.html',
})
export class JobFormComponent implements OnInit {
  @Input() jobData: Partial<IJob> | null = null;
  @Output() formSubmitted = new EventEmitter<IJob>();
  @Output() formCancel = new EventEmitter<void>();

  jobForm!: FormGroup;
  showId = false;

  skills$!: Observable<ISkill[]>;

  constructor(
    private formBuilderService: JobFormBuilderService,
    private skillDataService: SkillDataService
  ) {}

  ngOnInit(): void {
    this.jobForm = this.formBuilderService.build(this.jobData ?? {});
    this.skills$ = this.skillDataService.skills$;
  }

  submit(): void {
    if (this.jobForm.valid) {
      this.formSubmitted.emit(this.jobForm.value);
      this.jobForm.reset();
    } else {
      this.jobForm.markAllAsTouched();
    }
  }

  cancel() {
    this.formCancel.emit();
  }
}
