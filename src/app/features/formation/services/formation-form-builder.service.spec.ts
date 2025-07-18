import { TestBed } from '@angular/core/testing';

import { FormationFormBuilderService } from './formation-form-builder.service';

describe('FormationFormBuilderService', () => {
  let service: FormationFormBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormationFormBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
