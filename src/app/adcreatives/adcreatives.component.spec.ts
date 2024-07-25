import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdcreativesComponent } from './adcreatives.component';

describe('AdcreativesComponent', () => {
  let component: AdcreativesComponent;
  let fixture: ComponentFixture<AdcreativesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdcreativesComponent]
    });
    fixture = TestBed.createComponent(AdcreativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
