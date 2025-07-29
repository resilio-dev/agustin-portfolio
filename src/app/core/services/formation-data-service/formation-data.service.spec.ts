import { TestBed } from '@angular/core/testing';

import { FormationDataService } from './formation-data.service';

describe('FormationDataService', () => {
  let service: FormationDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormationDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
