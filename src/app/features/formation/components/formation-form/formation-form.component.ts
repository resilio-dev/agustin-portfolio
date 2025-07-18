import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IFormation } from 'src/app/core/models/IFormation.model';
import { FormationFormBuilderService } from '../../services/formation-form-builder.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formation-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formation-form.component.html',
  styleUrl: './formation-form.component.less'
})
export class FormationFormComponent {
  @Input() formationData: Partial<IFormation> | null = null;
  @Output() formSubmitted = new EventEmitter<IFormation>();
  @Output() formCancel = new EventEmitter<void>();

  formationForm!: FormGroup;

  constructor(private formBuilderService: FormationFormBuilderService) {}

  ngOnInit(): void {
    this.formationForm = this.formBuilderService.build(this.formationData ?? {});
  }

  submit(): void {
    if (this.formationForm.valid) {
      this.formSubmitted.emit(this.formationForm.value);
    } else {
      this.formationForm.markAllAsTouched();
    }
  }
  cancel() {
    this.formationForm.reset();
    this.formCancel.emit();
  }
}
