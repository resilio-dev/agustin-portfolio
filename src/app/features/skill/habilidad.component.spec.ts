import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadComponent } from './habilidad.component';

describe('HabilidadComponent', () => {
  let component: HabilidadComponent;
  let fixture: ComponentFixture<HabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
