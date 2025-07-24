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
      job: [job?.title ?? '', [Validators.required, Validators.maxLength(100)]],
      description: [
        job?.description ?? '',
        [Validators.required, Validators.maxLength(1000)],
      ],
      imgSrc: [
        job?.urlImg ?? '',
        [
          Validators.required,
          Validators.maxLength(1000),
          linkPatternValidator(),
        ],
      ],
      linkJob: [
        job?.link ?? '',
        [
          Validators.required,
          Validators.maxLength(1000),
          linkPatternValidator(),
        ],
      ],
      initialDate: [
        job?.startDate ?? '',
        [Validators.required, datePatternValidator()],
      ],
      finalDate: [
        job?.endDate ?? '',
        [Validators.required, datePatternValidator()],
      ],
      technologies: [job?.technologies ?? [], [arrayNoEmptyValidator()]],

    });
  }
}
