import { TestBed } from '@angular/core/testing';

import { ServiceSolicitarService } from './service-solicitar.service';

describe('ServiceSolicitarService', () => {
  let service: ServiceSolicitarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceSolicitarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
