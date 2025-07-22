import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IFormation } from 'src/app/core/models/IFormation.model';

@Injectable({
  providedIn: 'root'
})
export class FormationFormBuilderService {
constructor(private fb: FormBuilder) {}

  build(formation?: Partial<IFormation>): FormGroup {
    return this.fb.group({
      id: [formation?.id ?? null],
      title: [formation?.title ?? '', [Validators.required, Validators.maxLength(100)]],
      img: [
        formation?.img ?? '',
        [Validators.required, Validators.pattern(/https?:\/\/.+/), Validators.maxLength(1000)],
      ],
      link: [
        formation?.link ?? '',
        [Validators.required, Validators.maxLength(100)],
      ],
      timeForm: [
        formation?.timeForm ?? '',
        [Validators.required, Validators.maxLength(50)],
      ]
    });
  }}