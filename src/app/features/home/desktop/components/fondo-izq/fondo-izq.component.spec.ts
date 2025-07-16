import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoIzqComponent } from './fondo-izq.component';

describe('FondoIzqComponent', () => {
  let component: FondoIzqComponent;
  let fixture: ComponentFixture<FondoIzqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FondoIzqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FondoIzqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
