import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentNineComponent } from './content-nine.component';

describe('ContentNineComponent', () => {
  let component: ContentNineComponent;
  let fixture: ComponentFixture<ContentNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentNineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
