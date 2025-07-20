import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.less'],
})
export class FormContactComponent implements OnInit, OnDestroy {
  @Output() contactSubmit = new EventEmitter<{
    name: string;
    email: string;
    message: string;
  }>();
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnDestroy(): void {
    this.contactForm.reset();
  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.maxLength(1000)]],
    });
  }

  enviar() {
    if (this.contactForm.valid) {
      this.contactSubmit.emit(this.contactForm.value);
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  cancel() {
    this.contactForm.reset();
  }
}
