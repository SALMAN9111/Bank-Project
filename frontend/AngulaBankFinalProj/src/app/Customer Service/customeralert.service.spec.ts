import { TestBed } from '@angular/core/testing';

import { CustomeralertService } from './customeralert.service';

describe('CustomeralertService', () => {
  let service: CustomeralertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomeralertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
