import { TestBed } from '@angular/core/testing';

import { SkillFormBuilderService } from './skill-form-builder.service';

describe('SkillFormBuilderService', () => {
  let service: SkillFormBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillFormBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
