import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditarProjectComponent } from './form-editar-project.component';

describe('FormEditarProjectComponent', () => {
  let component: FormEditarProjectComponent;
  let fixture: ComponentFixture<FormEditarProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEditarProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditarProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
