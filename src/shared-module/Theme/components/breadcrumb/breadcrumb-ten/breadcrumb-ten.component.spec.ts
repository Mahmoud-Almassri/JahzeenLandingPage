import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbTenComponent } from './breadcrumb-ten.component';

describe('BreadcrumbTenComponent', () => {
  let component: BreadcrumbTenComponent;
  let fixture: ComponentFixture<BreadcrumbTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbTenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
