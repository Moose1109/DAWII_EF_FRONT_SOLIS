import { TestBed } from '@angular/core/testing';

import { AtencionServiceService } from './atencion-service.service';

describe('AtencionServiceService', () => {
  let service: AtencionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtencionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
