import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProject } from 'src/app/core/models/IProject.model';
import { arrayNoEmptyValidator } from 'src/app/shared/validators/array-no-empty.validator';
import { datePatternValidator } from 'src/app/shared/validators/date-pattern.validator';
import { linkPatternValidator } from 'src/app/shared/validators/link-pattern.validator';

@Injectable({ providedIn: 'root' })
export class ProjectFormBuilderService {
  constructor(private fb: FormBuilder) {}

  build(project?: Partial<IProject>): FormGroup {
    return this.fb.group({
      id: [project?.id ?? null],
      title: [
        project?.title ?? '',
        [Validators.required, Validators.maxLength(100)],
      ],
      description: [
        project?.description ?? '',
        [Validators.required, Validators.maxLength(1000)],
      ],
      imgSrc: [
        project?.urlImg ?? '',
        [Validators.required, linkPatternValidator()],
      ],
      linkDemo: [
        project?.link ?? '',
        [Validators.required, linkPatternValidator()],
      ],
      creationDate: [
        project?.startDate ?? '',
        [Validators.required, datePatternValidator()],
      ],
      finalDate: [
        project?.endDate ?? '',
        [Validators.required, datePatternValidator()],
      ],
      technologies: [project?.tecnologies ?? [], [arrayNoEmptyValidator()]],
    });
  }
}
