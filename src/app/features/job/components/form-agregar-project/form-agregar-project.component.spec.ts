import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAgregarProjectComponent } from './form-agregar-project.component';

describe('FormAgregarProjectComponent', () => {
  let component: FormAgregarProjectComponent;
  let fixture: ComponentFixture<FormAgregarProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAgregarProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAgregarProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
