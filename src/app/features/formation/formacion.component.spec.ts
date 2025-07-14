import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacionComponent } from './formacion.component';

describe('FormacionComponent', () => {
  let component: FormacionComponent;
  let fixture: ComponentFixture<FormacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crearse FormacionComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Debería renderizar los datos', () => {
    const fixture = TestBed.createComponent(FormacionComponent);
    const formacion = fixture.componentInstance;
    expect(formacion.datos).toBeTruthy();
  });
});
