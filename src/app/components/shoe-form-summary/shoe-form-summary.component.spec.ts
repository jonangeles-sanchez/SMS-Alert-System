import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeFormSummaryComponent } from './shoe-form-summary.component';

describe('ShoeFormSummaryComponent', () => {
  let component: ShoeFormSummaryComponent;
  let fixture: ComponentFixture<ShoeFormSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoeFormSummaryComponent]
    });
    fixture = TestBed.createComponent(ShoeFormSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
