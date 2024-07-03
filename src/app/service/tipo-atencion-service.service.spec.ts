import { TestBed } from '@angular/core/testing';

import { TipoAtencionServiceService } from './tipo-atencion-service.service';

describe('TipoAtencionServiceService', () => {
  let service: TipoAtencionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoAtencionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
