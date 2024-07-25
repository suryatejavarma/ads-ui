import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsetsComponent } from './adsets.component';

describe('AdsetsComponent', () => {
  let component: AdsetsComponent;
  let fixture: ComponentFixture<AdsetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdsetsComponent]
    });
    fixture = TestBed.createComponent(AdsetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
