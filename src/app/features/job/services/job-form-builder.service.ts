import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IJob } from 'src/app/core/models/IJob.model';
import { arrayNoEmptyValidator } from 'src/app/shared/validators/array-no-empty.validator';
import { datePatternValidator } from 'src/app/shared/validators/date-pattern.validator';
import { linkPatternValidator } from 'src/app/shared/validators/link-pattern.validator';

@Injectable({ providedIn: 'root' })
export class JobFormBuilderService {
  constructor(private fb: FormBuilder) {}

  build(job?: Partial<IJob>): FormGroup {
    return this.fb.group({
      id: [job?.id ?? null],
      title: [job?.title ?? '', [Validators.required, Validators.maxLength(100)]],
      description: [
        job?.description ?? '',
        [Validators.required, Validators.maxLength(1000)],
      ],
      urlImg: [
        job?.urlImg ?? '',
        [
          Validators.required,
          Validators.maxLength(1000),
          linkPatternValidator(),
        ],
      ],
      startDate: [
        job?.startDate ?? '',
        [Validators.required, datePatternValidator()],
      ],
      endDate: [
        job?.endDate ?? '',
        [Validators.required, datePatternValidator()],
      ],
      technologies: [job?.technologies ?? [], [arrayNoEmptyValidator()]],
    });
  }
}
