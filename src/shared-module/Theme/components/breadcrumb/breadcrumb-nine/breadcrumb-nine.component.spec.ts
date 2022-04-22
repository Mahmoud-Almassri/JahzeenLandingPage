import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbNineComponent } from './breadcrumb-nine.component';

describe('BreadcrumbNineComponent', () => {
  let component: BreadcrumbNineComponent;
  let fixture: ComponentFixture<BreadcrumbNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbNineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
