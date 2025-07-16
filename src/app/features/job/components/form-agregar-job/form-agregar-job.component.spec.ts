import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgregarJobComponent } from './form-agregar-job.component';

describe('ModalAgregarJobComponent', () => {
  let component: ModalAgregarJobComponent;
  let fixture: ComponentFixture<ModalAgregarJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalAgregarJobComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAgregarJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
