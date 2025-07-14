import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreMiComponent } from './sobre-mi.component';

describe('SobreMiComponent', () => {
  let component: SobreMiComponent;
  let fixture: ComponentFixture<SobreMiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreMiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crearse SobreMiComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Debería renderizar los datos', () => {
    const fixture = TestBed.createComponent(SobreMiComponent);
    const sobreMi = fixture.componentInstance;
    expect(sobreMi.datos).toBeTruthy();
  });
});
