import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadOneComponent } from './download-one.component';

describe('DownloadOneComponent', () => {
  let component: DownloadOneComponent;
  let fixture: ComponentFixture<DownloadOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
