import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ISkill } from 'src/app/core/models/ISkill.model';

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
      logo: [
        skill?.logo ?? '',
        [Validators.required, Validators.pattern(/https?:\/\/.+/)],
      ],
    });
  }
}
