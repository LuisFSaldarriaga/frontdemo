import { TestBed } from '@angular/core/testing';

import { RegisterHacedorService } from './register-hacedor.service';

describe('RegisterHacedorService', () => {
  let service: RegisterHacedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterHacedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
