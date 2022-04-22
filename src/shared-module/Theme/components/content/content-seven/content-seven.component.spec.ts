import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSevenComponent } from './content-seven.component';

describe('ContentSevenComponent', () => {
  let component: ContentSevenComponent;
  let fixture: ComponentFixture<ContentSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentSevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
