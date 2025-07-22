import { TestBed } from '@angular/core/testing';

import { SkillDataService } from './skill-data.service';

describe('SkillDataService', () => {
  let service: SkillDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
