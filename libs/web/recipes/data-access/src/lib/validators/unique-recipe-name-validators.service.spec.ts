import {TestBed} from '@angular/core/testing';

import {UniqueRecipeNameValidatorsService} from './unique-recipe-name-validators.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('UniqueRecipeNameValidatorsService', () => {
  let service: UniqueRecipeNameValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: 'BASE_API_URL', useValue: ''
        },
      ]
    });
    service = TestBed.inject(UniqueRecipeNameValidatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
