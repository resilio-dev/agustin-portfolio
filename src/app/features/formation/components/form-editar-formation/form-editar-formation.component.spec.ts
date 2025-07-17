import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditarFormationComponent } from './form-editar-formation.component';

describe('FormEditarFormationComponent', () => {
  let component: FormEditarFormationComponent;
  let fixture: ComponentFixture<FormEditarFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEditarFormationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditarFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
