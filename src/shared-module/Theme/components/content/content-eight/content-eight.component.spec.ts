import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentEightComponent } from './content-eight.component';

describe('ContentEightComponent', () => {
  let component: ContentEightComponent;
  let fixture: ComponentFixture<ContentEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentEightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
