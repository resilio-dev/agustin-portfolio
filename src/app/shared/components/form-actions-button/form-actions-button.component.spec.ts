import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormActionsButtonComponent } from './form-actions-button.component';

describe('FormActionsButtonComponent', () => {
  let component: FormActionsButtonComponent;
  let fixture: ComponentFixture<FormActionsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormActionsButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormActionsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
