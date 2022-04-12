import { TestBed } from '@angular/core/testing';

import { RecipesDataService } from './recipes-data.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('RecipesDataService', () => {
  let httpMock: HttpTestingController;

  let service: RecipesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(RecipesDataService);
  });
  afterEach(() => {
    httpMock.verify();
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getRecipe', () => {
    test('returns an observable of response data on success', () => {
      const response = {} as any;

      service.getRecipe({} as any).subscribe(res => {
        expect(res).toBe(response);
      });

      const req = httpMock.expectOne(service.endpoints.getRecipe);
      expect(req.request.method).toBe('GET');
      req.flush(response);
    });

    test('throws an error including response data on fail', () => {
      const response = {};

      service.getRecipe({} as any).subscribe(
        () => {
          fail('expecting error');
        },
        err => {
          expect(err.error).toBe(response);
        }
      );

      const req = httpMock.expectOne(service.endpoints.getRecipe);
      expect(req.request.method).toBe('GET');
      req.flush(response, {
        status: 400,
        statusText: 'Bad request'
      });
    });
  });

  describe('#getRecipeCollection', () => {
    test('returns an observable of response data on success', () => {
      const response = {} as any;

      service.getRecipeCollection({} as any).subscribe(res => {
        expect(res).toBe(response);
      });

      const req = httpMock.expectOne(service.endpoints.getRecipeCollection);
      expect(req.request.method).toBe('GET');
      req.flush(response);
    });

    test('throws an error including response data on fail', () => {
      const response = {};

      service.getRecipeCollection({} as any).subscribe(
        () => {
          fail('expecting error');
        },
        err => {
          expect(err.error).toBe(response);
        }
      );

      const req = httpMock.expectOne(service.endpoints.getRecipeCollection);
      expect(req.request.method).toBe('GET');
      req.flush(response, {
        status: 400,
        statusText: 'Bad request'
      });
    });
  });

  describe('#createRecipe', () => {
    test('returns an observable of response data on success', () => {
      const response = {} as any;

      service.createRecipe({} as any).subscribe(res => {
        expect(res).toBe(response);
      });

      const req = httpMock.expectOne(service.endpoints.createRecipe);
      expect(req.request.method).toBe('POST');
      req.flush(response);
    });

    test('throws an error including response data on fail', () => {
      const response = {};

      service.createRecipe({} as any).subscribe(
        () => {
          fail('expecting error');
        },
        err => {
          expect(err.error).toBe(response);
        }
      );

      const req = httpMock.expectOne(service.endpoints.createRecipe);
      expect(req.request.method).toBe('POST');
      req.flush(response, {
        status: 400,
        statusText: 'Bad request'
      });
    });
  });

  describe('#updateRecipe', () => {
    test('returns an observable of response data on success', () => {
      const response = {} as any;

      service.updateRecipe({} as any).subscribe(res => {
        expect(res).toBe(response);
      });

      const req = httpMock.expectOne(service.endpoints.updateRecipe);
      expect(req.request.method).toBe('PUT');
      req.flush(response);
    });

    test('throws an error including response data on fail', () => {
      const response = {};

      service.updateRecipe({} as any).subscribe(
        () => {
          fail('expecting error');
        },
        err => {
          expect(err.error).toBe(response);
        }
      );

      const req = httpMock.expectOne(service.endpoints.updateRecipe);
      expect(req.request.method).toBe('PUT');
      req.flush(response, {
        status: 400,
        statusText: 'Bad request'
      });
    });
  });

  describe('#removeRecipe', () => {
    test('returns an observable of response data on success', () => {
      const response = {} as any;

      service.removeRecipe({} as any).subscribe(res => {
        expect(res).toBe(response);
      });

      const req = httpMock.expectOne(service.endpoints.removeRecipe);
      expect(req.request.method).toBe('DELETE');
      req.flush(response);
    });

    test('throws an error including response data on fail', () => {
      const response = {};

      service.removeRecipe({} as any).subscribe(
        () => {
          fail('expecting error');
        },
        err => {
          expect(err.error).toBe(response);
        }
      );

      const req = httpMock.expectOne(service.endpoints.removeRecipe);
      expect(req.request.method).toBe('DELETE');
      req.flush(response, {
        status: 400,
        statusText: 'Bad request'
      });
    });
  });
});
