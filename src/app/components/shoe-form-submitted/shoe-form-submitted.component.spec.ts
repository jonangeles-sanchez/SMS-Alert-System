import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeFormSubmittedComponent } from './shoe-form-submitted.component';

describe('ShoeFormSubmittedComponent', () => {
  let component: ShoeFormSubmittedComponent;
  let fixture: ComponentFixture<ShoeFormSubmittedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoeFormSubmittedComponent]
    });
    fixture = TestBed.createComponent(ShoeFormSubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
