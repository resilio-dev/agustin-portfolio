import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoDerComponent } from './fondo-der.component';

describe('FondoDerComponent', () => {
  let component: FondoDerComponent;
  let fixture: ComponentFixture<FondoDerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FondoDerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FondoDerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
