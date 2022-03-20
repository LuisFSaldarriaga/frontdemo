import { TestBed } from '@angular/core/testing';

import { RegisterClienteService } from './register-cliente.service';

describe('RegisterClienteService', () => {
  let service: RegisterClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
