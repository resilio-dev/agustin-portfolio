import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IProject } from 'src/app/core/models/IProject.model';
import { ProjectFormBuilderService } from '../../services/project-form-builder.service';

@Component({
  selector: 'app-project-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.less',
})
export class ProjectFormComponent {
  @Input() projectData: Partial<IProject> | null = null;
  @Output() formSubmitted = new EventEmitter<IProject>();
  @Output() formCancel = new EventEmitter<void>();

  projectForm!: FormGroup;

  constructor(private formBuilderService: ProjectFormBuilderService) {}

  ngOnInit(): void {
    this.projectForm = this.formBuilderService.build(this.projectData ?? {});
  }

  submit(): void {
    if (this.projectForm.valid) {
      this.formSubmitted.emit(this.projectForm.value);
    } else {
      this.projectForm.markAllAsTouched();
    }
  }

  cancel() {
    this.projectForm.reset();
    this.formCancel.emit();
  }
}
