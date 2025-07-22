import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalActionsButtonComponent } from './modal-actions-button.component';

describe('ModalActionsButtonComponent', () => {
  let component: ModalActionsButtonComponent;
  let fixture: ComponentFixture<ModalActionsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalActionsButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalActionsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
