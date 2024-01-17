import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestPlacesComponent } from './best-places.component';

describe('BestPlacesComponent', () => {
  let component: BestPlacesComponent;
  let fixture: ComponentFixture<BestPlacesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BestPlacesComponent]
    });
    fixture = TestBed.createComponent(BestPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
