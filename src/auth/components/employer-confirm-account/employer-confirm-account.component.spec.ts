import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerConfirmAccountComponent } from './employer-confirm-account.component';

describe('EmployerConfirmAccountComponent', () => {
  let component: EmployerConfirmAccountComponent;
  let fixture: ComponentFixture<EmployerConfirmAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerConfirmAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerConfirmAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
