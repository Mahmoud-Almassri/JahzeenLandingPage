import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSixComponent } from './content-six.component';

describe('ContentSixComponent', () => {
  let component: ContentSixComponent;
  let fixture: ComponentFixture<ContentSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
