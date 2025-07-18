import { TestBed } from '@angular/core/testing';

import { JobFormBuilderService } from './job-form-builder.service';

describe('JobFormBuilderService', () => {
  let service: JobFormBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobFormBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
