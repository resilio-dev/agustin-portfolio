import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Valida que un array no se encuentre vacío.
 */
export function arrayNoEmptyValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return Array.isArray(control.value) && control.value.length > 0
      ? null
      : { required: true };
  };
}