import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbOneComponent } from './breadcrumb-one.component';

describe('BreadcrumbOneComponent', () => {
  let component: BreadcrumbOneComponent;
  let fixture: ComponentFixture<BreadcrumbOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
