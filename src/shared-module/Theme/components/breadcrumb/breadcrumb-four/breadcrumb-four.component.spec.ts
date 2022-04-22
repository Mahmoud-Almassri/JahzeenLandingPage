import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbFourComponent } from './breadcrumb-four.component';

describe('BreadcrumbFourComponent', () => {
  let component: BreadcrumbFourComponent;
  let fixture: ComponentFixture<BreadcrumbFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
