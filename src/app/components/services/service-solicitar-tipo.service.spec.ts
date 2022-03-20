import { TestBed } from '@angular/core/testing';

import { ServiceSolicitarTipoService } from './service-solicitar-tipo.service';

describe('ServiceSolicitarTipoService', () => {
  let service: ServiceSolicitarTipoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceSolicitarTipoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
