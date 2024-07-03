import { TestBed } from '@angular/core/testing';

import { TipoMascotaServiceService } from './tipo-mascota-service.service';

describe('TipoMascotaServiceService', () => {
  let service: TipoMascotaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoMascotaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
