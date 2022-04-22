import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbSevenComponent } from './breadcrumb-seven.component';

describe('BreadcrumbSevenComponent', () => {
  let component: BreadcrumbSevenComponent;
  let fixture: ComponentFixture<BreadcrumbSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbSevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
