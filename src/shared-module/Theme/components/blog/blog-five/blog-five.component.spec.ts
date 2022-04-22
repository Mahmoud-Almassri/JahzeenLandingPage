import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFiveComponent } from './blog-five.component';

describe('BlogFiveComponent', () => {
  let component: BlogFiveComponent;
  let fixture: ComponentFixture<BlogFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
