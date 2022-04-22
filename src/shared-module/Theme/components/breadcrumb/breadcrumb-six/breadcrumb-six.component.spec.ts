import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbSixComponent } from './breadcrumb-six.component';

describe('BreadcrumbSixComponent', () => {
  let component: BreadcrumbSixComponent;
  let fixture: ComponentFixture<BreadcrumbSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
