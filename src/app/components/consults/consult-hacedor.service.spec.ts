import { TestBed } from '@angular/core/testing';

import { ConsultHacedorService } from './consult-hacedor.service';

describe('ConsultHacedorService', () => {
  let service: ConsultHacedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultHacedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
