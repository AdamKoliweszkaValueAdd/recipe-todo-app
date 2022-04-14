import {TestBed} from '@angular/core/testing';
import {Observable} from 'rxjs';
import {provideMockActions} from '@ngrx/effects/testing';
import {provideMockStore} from '@ngrx/store/testing';
import {NxModule, fetch, pessimisticUpdate} from '@nrwl/angular';
import {cold, hot} from 'jest-marbles';
import {RecipeEffects} from './recipe.effects';
import * as fromRecipeActions from './recipe.actions';
import {RecipesDataService} from '../services/recipes-data.service';
import {createSpyObj} from 'jest-createspyobj';

describe('RecipeEffects', () => {
  let recipesDataService: jest.Mocked<RecipesDataService>;
  let actions: Observable<any>;
  let effects: RecipeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        RecipeEffects,
        provideMockActions(() => actions),
        provideMockStore({initialState: {}}),
        {
          provide: RecipesDataService,
          useValue: createSpyObj(RecipesDataService)
        }
      ]
    });

    effects = TestBed.inject(RecipeEffects);
    recipesDataService = TestBed.inject(RecipesDataService) as jest.Mocked<RecipesDataService>;
  });

  describe('getRecipe$', () => {
    test('returns GetRecipeSuccess action on success', () => {
      const payload = {} as any;
      const action = fromRecipeActions.getRecipe({} as any);
      const completion = fromRecipeActions.getRecipeSuccess({payload});

      actions = hot('-a', {a: action});
      const response = cold('--b|', {b: payload});
      const expected = cold('---c', {c: completion});
      recipesDataService.getRecipe.mockReturnValue(response);

      expect(effects.getRecipe$).toSatisfyOnFlush(() => {
        expect(recipesDataService.getRecipe).toHaveBeenCalled();
      });
      expect(effects.getRecipe$).toBeObservable(expected);
    });

    test('returns GetRecipeFail action on fail', () => {
      const payload = {} as any;
      const action = fromRecipeActions.getRecipe({} as any);
      const completion = fromRecipeActions.getRecipeFail({payload});

      actions = hot('-a', {a: action});
      const response = cold('-#', {}, payload);
      const expected = cold('--c', {c: completion});
      recipesDataService.getRecipe.mockReturnValue(response);

      expect(effects.getRecipe$).toSatisfyOnFlush(() => {
        expect(recipesDataService.getRecipe).toHaveBeenCalled();
      });
      expect(effects.getRecipe$).toBeObservable(expected);
    });
  });

  describe('getRecipeCollection$', () => {
    test('returns GetRecipeCollectionSuccess action on success', () => {
      const payload = {} as any;
      const action = fromRecipeActions.getRecipeCollection();
      const completion = fromRecipeActions.getRecipeCollectionSuccess({payload});

      actions = hot('-a', {a: action});
      const response = cold('--b|', {b: payload});
      const expected = cold('---c', {c: completion});
      recipesDataService.getRecipeCollection.mockReturnValue(response);

      expect(effects.getRecipeCollection$).toSatisfyOnFlush(() => {
        expect(recipesDataService.getRecipeCollection).toHaveBeenCalled();
      });
      expect(effects.getRecipeCollection$).toBeObservable(expected);
    });

    test('returns GetRecipeCollectionFail action on fail', () => {
      const payload = {} as any;
      const action = fromRecipeActions.getRecipeCollection();
      const completion = fromRecipeActions.getRecipeCollectionFail({payload});

      actions = hot('-a', {a: action});
      const response = cold('-#', {}, payload);
      const expected = cold('--c', {c: completion});
      recipesDataService.getRecipeCollection.mockReturnValue(response);

      expect(effects.getRecipeCollection$).toSatisfyOnFlush(() => {
        expect(recipesDataService.getRecipeCollection).toHaveBeenCalled();
      });
      expect(effects.getRecipeCollection$).toBeObservable(expected);
    });
  });

  describe('createRecipe$', () => {
    test('returns CreateRecipeSuccess action on success', () => {
      const payload = {} as any;
      const action = fromRecipeActions.createRecipe({} as any);
      const completion = fromRecipeActions.createRecipeSuccess({payload});

      actions = hot('-a', {a: action});
      const response = cold('--b|', {b: payload});
      const expected = cold('---c', {c: completion});
      recipesDataService.createRecipe.mockReturnValue(response);

      expect(effects.createRecipe$).toSatisfyOnFlush(() => {
        expect(recipesDataService.createRecipe).toHaveBeenCalled();
      });
      expect(effects.createRecipe$).toBeObservable(expected);
    });

    test('returns CreateRecipeFail action on fail', () => {
      const payload = {} as any;
      const action = fromRecipeActions.createRecipe({} as any);
      const completion = fromRecipeActions.createRecipeFail({payload});

      actions = hot('-a', {a: action});
      const response = cold('-#', {}, payload);
      const expected = cold('--c', {c: completion});
      recipesDataService.createRecipe.mockReturnValue(response);

      expect(effects.createRecipe$).toSatisfyOnFlush(() => {
        expect(recipesDataService.createRecipe).toHaveBeenCalled();
      });
      expect(effects.createRecipe$).toBeObservable(expected);
    });
  });

  describe('updateRecipe$', () => {
    test('returns UpdateRecipeSuccess action on success', () => {
      const payload = {} as any;
      const action = fromRecipeActions.updateRecipe({} as any);
      const completion = fromRecipeActions.updateRecipeSuccess({payload});

      actions = hot('-a', {a: action});
      const response = cold('--b|', {b: payload});
      const expected = cold('---c', {c: completion});
      recipesDataService.updateRecipe.mockReturnValue(response);

      expect(effects.updateRecipe$).toSatisfyOnFlush(() => {
        expect(recipesDataService.updateRecipe).toHaveBeenCalled();
      });
      expect(effects.updateRecipe$).toBeObservable(expected);
    });

    test('returns UpdateRecipeFail action on fail', () => {
      const payload = {} as any;
      const action = fromRecipeActions.updateRecipe({} as any);
      const completion = fromRecipeActions.updateRecipeFail({payload});

      actions = hot('-a', {a: action});
      const response = cold('-#', {}, payload);
      const expected = cold('--c', {c: completion});
      recipesDataService.updateRecipe.mockReturnValue(response);

      expect(effects.updateRecipe$).toSatisfyOnFlush(() => {
        expect(recipesDataService.updateRecipe).toHaveBeenCalled();
      });
      expect(effects.updateRecipe$).toBeObservable(expected);
    });
  });

  describe('removeRecipe$', () => {
    test('returns RemoveRecipeSuccess action on success', () => {
      const payload = {} as any;
      const action = fromRecipeActions.removeRecipe({} as any);
      const completion = fromRecipeActions.removeRecipeSuccess({payload});

      actions = hot('-a', {a: action});
      const response = cold('--b|', {b: payload});
      const expected = cold('---c', {c: completion});
      recipesDataService.removeRecipe.mockReturnValue(response);

      expect(effects.removeRecipe$).toSatisfyOnFlush(() => {
        expect(recipesDataService.removeRecipe).toHaveBeenCalled();
      });
      expect(effects.removeRecipe$).toBeObservable(expected);
    });

    test('returns RemoveRecipeFail action on fail', () => {
      const payload = {} as any;
      const action = fromRecipeActions.removeRecipe({} as any);
      const completion = fromRecipeActions.removeRecipeFail({payload});

      actions = hot('-a', {a: action});
      const response = cold('-#', {}, payload);
      const expected = cold('--c', {c: completion});
      console.log(expected);
      recipesDataService.removeRecipe.mockReturnValue(response);

      expect(effects.removeRecipe$).toSatisfyOnFlush(() => {
        expect(recipesDataService.removeRecipe).toHaveBeenCalled();
      });
      expect(effects.removeRecipe$).toBeObservable(expected);
    });
  });
});
