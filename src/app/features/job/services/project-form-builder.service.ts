// features/projects/project-form-builder.service.ts
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProject } from 'src/app/core/models/IProject.model';
import { datePatternValidator } from 'src/app/shared/validators/date-pattern.validator';

@Injectable({ providedIn: 'root' })
export class ProjectFormBuilderService {
  constructor(private fb: FormBuilder) {}

  build(project?: Partial<IProject>): FormGroup {
    return this.fb.group({
      id: [project?.id ?? null],
      title: [project?.title ?? '', [Validators.required, Validators.maxLength(100)]],
      description: [project?.description ?? '', [Validators.required, Validators.maxLength(1000)]],
      imgSrc: [project?.imgSrc ?? '', [Validators.required, Validators.pattern(/https?:\/\/.+/)]],
      linkDemo: [project?.linkDemo ?? '', [Validators.required, Validators.pattern(/https?:\/\/.+/)]],
      creationDate: [project?.creationDate ?? '', [Validators.required, datePatternValidator()]]
    });
  }
}
