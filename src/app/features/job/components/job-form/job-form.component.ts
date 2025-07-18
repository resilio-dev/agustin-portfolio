import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormsModule } from '@angular/forms';
import { JobFormBuilderService } from '../../services/job-form-builder.service';
import { IJob } from 'src/app/core/models/IJob.model';

@Component({
  selector: 'app-job-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  styleUrl: './job-form.component.less',
  templateUrl: './job-form.component.html',
})
export class JobFormComponent implements OnInit {
  @Input() jobData: Partial<IJob> | null = null;
  @Output() formSubmitted = new EventEmitter<IJob>();
  @Output() formCancel = new EventEmitter<void>();

  jobForm!: FormGroup;

  constructor(private formBuilderService: JobFormBuilderService) {}

  ngOnInit(): void {
    this.jobForm = this.formBuilderService.build(this.jobData ?? {});
  }

  submit(): void {
    if (this.jobForm.valid) {
      this.formSubmitted.emit(this.jobForm.value);
    } else {
      this.jobForm.markAllAsTouched();
    }
  }

  cancel() {
    this.jobForm.reset();
    this.formCancel.emit();
  }
}

