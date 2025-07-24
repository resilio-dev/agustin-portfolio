import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IFormation } from 'src/app/core/models/IFormation.model';
import { datePatternValidator } from 'src/app/shared/validators/date-pattern.validator';

@Injectable({
  providedIn: 'root',
})
export class FormationFormBuilderService {
  constructor(private fb: FormBuilder) {}

  build(formation?: Partial<IFormation>): FormGroup {
    return this.fb.group({
      id: [formation?.id ?? null],
      title: [
        formation?.title ?? '',
        [Validators.required, Validators.maxLength(150)],
      ],
      academy: [
        formation?.academy ?? '',
        [Validators.required, Validators.maxLength(150)],
      ],
      description: [
        formation?.description ?? '',
        [Validators.required, Validators.maxLength(500)],
      ],
      type: [formation?.type ?? 'OTRO', [Validators.required]],
      startDate: [
        formation?.startDate ?? '',
        [Validators.required, datePatternValidator()],
      ],
      endDate: [
        formation?.endDate ?? '',
        [Validators.required, datePatternValidator()],
      ],
    });
  }
}
