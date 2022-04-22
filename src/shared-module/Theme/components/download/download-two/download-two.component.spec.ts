import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadTwoComponent } from './download-two.component';

describe('DownloadTwoComponent', () => {
  let component: DownloadTwoComponent;
  let fixture: ComponentFixture<DownloadTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
