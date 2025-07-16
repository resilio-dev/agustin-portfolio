import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoUserComponent } from './foto-user.component';

describe('FotoUserComponent', () => {
  let component: FotoUserComponent;
  let fixture: ComponentFixture<FotoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FotoUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
