import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ISkill } from 'src/app/core/models/ISkill.model';
import { SkillFormBuilderService } from '../../services/skill-form-builder.service';

@Component({
  selector: 'app-skill-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './skill-form.component.html',
  styleUrl: './skill-form.component.less'
})
export class SkillFormComponent {
  @Input() skillData: Partial<ISkill> | null = null;
  @Output() formSubmitted = new EventEmitter<ISkill>();
  @Output() formCancel = new EventEmitter<void>();

  skillForm!: FormGroup;

  constructor(private formBuilderService: SkillFormBuilderService) {}

  ngOnInit(): void {
    this.skillForm = this.formBuilderService.build(this.skillData ?? {});
  }

  submit(): void {
    if (this.skillForm.valid) {
      this.formSubmitted.emit(this.skillForm.value);
    } else {
      this.skillForm.markAllAsTouched();
    }
  }

  cancel() {
    this.skillForm.reset();
    this.formCancel.emit();
  }
}
