import {TestBed} from '@angular/core/testing';

import {IdentyficationNumberGeneratorService} from './identyfication-number-generator.service';

describe('IdentyficationNumberGeneratorService', () => {
  let service: IdentyficationNumberGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdentyficationNumberGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 16 length id', () => {
    expect(service.generateId().length).toBe(16);
  });

  it('should not return the same id', () => {
    const firstId = service.generateId();
    const secondId = service.generateId();
    expect(firstId).not.toBe(secondId);
  });
});
