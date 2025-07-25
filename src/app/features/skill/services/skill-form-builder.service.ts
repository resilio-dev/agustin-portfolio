import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ISkill } from 'src/app/core/models/ISkill.model';
import { linkPatternValidator } from 'src/app/shared/validators/link-pattern.validator';

@Injectable({
  providedIn: 'root',
})
export class SkillFormBuilderService {
  constructor(private fb: FormBuilder) {}

  build(skill?: Partial<ISkill>): FormGroup {
    return this.fb.group({
      id: [skill?.id ?? null],
      name: [
        skill?.name ?? '',
        [Validators.required, Validators.maxLength(50)],
      ],
      urlLogo: [
        skill?.urlLogo ?? '',
        [Validators.required, linkPatternValidator()],
      ],
      isLearning: [skill?.urlLogo ?? false, [Validators.required]],
      description: [
        skill?.description ?? '',
        [Validators.required, Validators.maxLength(500)],
      ],
    });
  }
}
