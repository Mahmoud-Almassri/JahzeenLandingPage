import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbThreeComponent } from './breadcrumb-three.component';

describe('BreadcrumbThreeComponent', () => {
  let component: BreadcrumbThreeComponent;
  let fixture: ComponentFixture<BreadcrumbThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
