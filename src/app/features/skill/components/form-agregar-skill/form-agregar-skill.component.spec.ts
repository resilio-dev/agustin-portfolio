import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAgregarSkillComponent } from './form-agregar-skill.component';

describe('FormAgregarSkillComponent', () => {
  let component: FormAgregarSkillComponent;
  let fixture: ComponentFixture<FormAgregarSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAgregarSkillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAgregarSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
