import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Valida que una cadena de texto que representa una URL inicie con algun patrón:
 *  -> 'https://'
 *  -> 'http://'
 *  -> '#'
 *  -> 'assets/'
 */
export function linkPatternValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) return null;

    const pattern = /^(https?:\/\/[^\s]+|assets\/[^\\s]*|#)$/;

    return pattern.test(value) ? null : { invalidDateFormat: true };
  };
}
