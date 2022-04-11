import { TestBed } from '@angular/core/testing';

import { IdentyficationNumberGeneratorService } from './identyfication-number-generator.service';

describe('IdentyficationNumberGeneratorService', () => {
  let service: IdentyficationNumberGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdentyficationNumberGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
