import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditarSkillComponent } from './form-editar-skill.component';

describe('FormEditarSkillComponent', () => {
  let component: FormEditarSkillComponent;
  let fixture: ComponentFixture<FormEditarSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEditarSkillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditarSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
