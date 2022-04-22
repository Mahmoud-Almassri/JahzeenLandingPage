import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbEightComponent } from './breadcrumb-eight.component';

describe('BreadcrumbEightComponent', () => {
  let component: BreadcrumbEightComponent;
  let fixture: ComponentFixture<BreadcrumbEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbEightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
