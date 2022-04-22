import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbTwoComponent } from './breadcrumb-two.component';

describe('BreadcrumbTwoComponent', () => {
  let component: BreadcrumbTwoComponent;
  let fixture: ComponentFixture<BreadcrumbTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
