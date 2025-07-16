import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditarJobComponent } from './form-editar-job.component';

describe('FormEditarJobComponent', () => {
  let component: FormEditarJobComponent;
  let fixture: ComponentFixture<FormEditarJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEditarJobComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditarJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
