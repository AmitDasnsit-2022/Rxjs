import { TestBed } from '@angular/core/testing';

import { DesignuUtilityService } from './designu-utility.service';

describe('DesignuUtilityService', () => {
  let service: DesignuUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignuUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
