import { TestBed } from '@angular/core/testing';

import { ContactService } from './contact-service.service';

describe('ContactServiceService', () => {
  let service: ContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
