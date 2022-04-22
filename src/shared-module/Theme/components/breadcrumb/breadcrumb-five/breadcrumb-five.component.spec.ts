import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbFiveComponent } from './breadcrumb-five.component';

describe('BreadcrumbFiveComponent', () => {
  let component: BreadcrumbFiveComponent;
  let fixture: ComponentFixture<BreadcrumbFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
