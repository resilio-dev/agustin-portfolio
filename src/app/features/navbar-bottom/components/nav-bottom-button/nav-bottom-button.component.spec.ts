import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBottomButtonComponent } from './nav-bottom-button.component';

describe('NavBottomButtonComponent', () => {
  let component: NavBottomButtonComponent;
  let fixture: ComponentFixture<NavBottomButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBottomButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBottomButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
