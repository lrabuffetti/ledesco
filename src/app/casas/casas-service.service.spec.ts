import { TestBed, inject } from '@angular/core/testing';

import { CasasServiceService } from './casas-service.service';

describe('CasasServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CasasServiceService]
    });
  });

  it('should be created', inject([CasasServiceService], (service: CasasServiceService) => {
    expect(service).toBeTruthy();
  }));
});
