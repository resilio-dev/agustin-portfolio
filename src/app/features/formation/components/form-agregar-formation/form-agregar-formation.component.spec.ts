import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAgregarFormationComponent } from './form-agregar-formation.component';

describe('FormAgregarFormationComponent', () => {
  let component: FormAgregarFormationComponent;
  let fixture: ComponentFixture<FormAgregarFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAgregarFormationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAgregarFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
