import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgregarComponent } from './modal-agregar.component';

describe('ModalAgregarComponent', () => {
  let component: ModalAgregarComponent;
  let fixture: ComponentFixture<ModalAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalAgregarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
