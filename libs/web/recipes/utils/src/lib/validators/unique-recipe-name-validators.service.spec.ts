import { TestBed } from '@angular/core/testing';

import { UniqueRecipeNameValidatorsService } from './unique-recipe-name-validators.service';

describe('UniqueRecipeNameValidatorsService', () => {
  let service: UniqueRecipeNameValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniqueRecipeNameValidatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
