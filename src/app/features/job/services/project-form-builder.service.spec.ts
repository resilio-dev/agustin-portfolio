import { TestBed } from '@angular/core/testing';
import { ProjectFormBuilderService } from './project-form-builder.service';


describe('PojectFormBuilderService', () => {
  let service: PojectFormBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectFormBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
