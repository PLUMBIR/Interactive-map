import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapFrameComponent } from './google-map-frame.component';

describe('GoogleMapFrameComponent', () => {
  let component: GoogleMapFrameComponent;
  let fixture: ComponentFixture<GoogleMapFrameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GoogleMapFrameComponent]
    });
    fixture = TestBed.createComponent(GoogleMapFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
