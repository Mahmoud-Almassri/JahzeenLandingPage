import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerCompleteProfileComponent } from './employer-complete-profile.component';

describe('EmployerCompleteProfileComponent', () => {
  let component: EmployerCompleteProfileComponent;
  let fixture: ComponentFixture<EmployerCompleteProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerCompleteProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerCompleteProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
