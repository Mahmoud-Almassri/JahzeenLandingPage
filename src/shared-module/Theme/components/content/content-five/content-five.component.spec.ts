import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFiveComponent } from './content-five.component';

describe('ContentFiveComponent', () => {
  let component: ContentFiveComponent;
  let fixture: ComponentFixture<ContentFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
