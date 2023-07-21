import { TestBed } from '@angular/core/testing';

import { ShoeRequestServiceService } from './shoe-request-service.service';

describe('ShoeRequestServiceService', () => {
  let service: ShoeRequestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoeRequestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
