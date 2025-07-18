import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IJob } from 'src/app/core/models/IJob.model';
import { datePatternValidator } from 'src/app/shared/validators/date-pattern.validator';

@Injectable({ providedIn: 'root' })
export class JobFormBuilderService {
  constructor(private fb: FormBuilder) {}

  build(job?: Partial<IJob>): FormGroup {
    return this.fb.group({
      id: [job?.id ?? null],
      job: [job?.job ?? '', [Validators.required, Validators.maxLength(50)]],
      description: [
        job?.description ?? '',
        [Validators.required, Validators.maxLength(255)],
      ],
      imgSrc: [
        job?.imgSrc ?? '',
        [Validators.required, Validators.pattern(/https?:\/\/.+/)],
      ],
      linkJob: [
        job?.linkJob ?? '',
        [Validators.required, Validators.maxLength(100)],
      ],
      initialDate: [
        job?.initialDate ?? '',
        [Validators.required, datePatternValidator()],
      ],
      finalDate: [
        job?.finalDate ?? '',
        Validators.required,
        datePatternValidator(),
      ],
    });
  }
}
