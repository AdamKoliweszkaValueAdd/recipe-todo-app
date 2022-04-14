import * as fromRecipeActions from './recipe.actions';
import { RecipeState, initialState, recipeReducer } from './recipe.reducer';
import { statesEqual } from '@valueadd/testing';

describe('Recipe Reducer', () => {
  let state: RecipeState;

  beforeEach(() => {
    state = { ...initialState };
  });

  describe('unknown action', () => {
    test('returns the initial state', () => {
      const action = {} as any;
      const result = recipeReducer(state, action);

      expect(result).toBe(state);
    });
  });

  describe('GetRecipe', () => {
    test('sets recipe, recipeLoading, recipeLoadError and does not modify other state properties', () => {
      const payload = {} as any;
      const action = fromRecipeActions.getRecipe({ payload });
      const result = recipeReducer(state, action);

      expect(result.recipe).toEqual(null);
      expect(result.recipeLoading).toEqual(true);
      expect(result.recipeLoadError).toEqual(null);
      expect(
        statesEqual(result, state, ['recipe', 'recipeLoading', 'recipeLoadError'])
      ).toBeTruthy();
    });
  });

  describe('GetRecipeFail', () => {
    test('sets recipe, recipeLoading, recipeLoadError and does not modify other state properties', () => {
      const payload = {} as any;
      const action = fromRecipeActions.getRecipeFail({ payload });
      const result = recipeReducer(state, action);

      expect(result.recipe).toEqual(null);
      expect(result.recipeLoading).toEqual(false);
      expect(result.recipeLoadError).toEqual(payload);
      expect(
        statesEqual(result, state, ['recipe', 'recipeLoading', 'recipeLoadError'])
      ).toBeTruthy();
    });
  });

  describe('GetRecipeSuccess', () => {
    test('sets recipe, recipeLoading, recipeLoadError and does not modify other state properties', () => {
      const payload = {} as any;
      const action = fromRecipeActions.getRecipeSuccess({ payload });
      const result = recipeReducer(state, action);

      expect(result.recipe).toEqual(payload);
      expect(result.recipeLoading).toEqual(false);
      expect(result.recipeLoadError).toEqual(null);
      expect(
        statesEqual(result, state, ['recipe', 'recipeLoading', 'recipeLoadError'])
      ).toBeTruthy();
    });
  });

  describe('GetRecipeCollection', () => {
    test('sets recipeCollection, recipeCollectionLoading, recipeCollectionLoadError and does not modify other state properties', () => {
      const payload = {} as any;
      const action = fromRecipeActions.getRecipeCollection();
      const result = recipeReducer(state, action);

      expect(result.recipeCollection).toEqual([]);
      expect(result.recipeCollectionLoading).toEqual(true);
      expect(result.recipeCollectionLoadError).toEqual(null);
      expect(
        statesEqual(result, state, [
          'recipeCollection',
          'recipeCollectionLoading',
          'recipeCollectionLoadError'
        ])
      ).toBeTruthy();
    });
  });

  describe('GetRecipeCollectionFail', () => {
    test('sets recipeCollection, recipeCollectionLoading, recipeCollectionLoadError and does not modify other state properties', () => {
      const payload = {} as any;
      const action = fromRecipeActions.getRecipeCollectionFail({ payload });
      const result = recipeReducer(state, action);

      expect(result.recipeCollection).toEqual([]);
      expect(result.recipeCollectionLoading).toEqual(false);
      expect(result.recipeCollectionLoadError).toEqual(payload);
      expect(
        statesEqual(result, state, [
          'recipeCollection',
          'recipeCollectionLoading',
          'recipeCollectionLoadError'
        ])
      ).toBeTruthy();
    });
  });

  describe('GetRecipeCollectionSuccess', () => {
    test('sets recipeCollection, recipeCollectionLoading, recipeCollectionLoadError and does not modify other state properties', () => {
      const payload = {} as any;
      const action = fromRecipeActions.getRecipeCollectionSuccess({ payload });
      const result = recipeReducer(state, action);

      expect(result.recipeCollection).toEqual(payload);
      expect(result.recipeCollectionLoading).toEqual(false);
      expect(result.recipeCollectionLoadError).toEqual(null);
      expect(
        statesEqual(result, state, [
          'recipeCollection',
          'recipeCollectionLoading',
          'recipeCollectionLoadError'
        ])
      ).toBeTruthy();
    });
  });

  describe('CreateRecipe', () => {
    test('sets recipeCreating, recipeCreateError and does not modify other state properties', () => {
      const payload = {} as any;
      const action = fromRecipeActions.createRecipe({ payload });
      const result = recipeReducer(state, action);

      expect(result.recipeCreating).toEqual(true);
      expect(result.recipeCreateError).toEqual(null);
      expect(statesEqual(result, state, ['recipeCreating', 'recipeCreateError'])).toBeTruthy();
    });
  });

  describe('CreateRecipeFail', () => {
    test('sets recipeCreating, recipeCreateError and does not modify other state properties', () => {
      const payload = {} as any;
      const action = fromRecipeActions.createRecipeFail({ payload });
      const result = recipeReducer(state, action);

      expect(result.recipeCreating).toEqual(false);
      expect(result.recipeCreateError).toEqual(payload);
      expect(statesEqual(result, state, ['recipeCreating', 'recipeCreateError'])).toBeTruthy();
    });
  });

  describe('CreateRecipeSuccess', () => {
    test('sets recipeCollection, recipeCreating, recipeCreateError and does not modify other state properties', () => {
      const payload = {} as any;
      const action = fromRecipeActions.createRecipeSuccess({ payload });
      const result = recipeReducer(state, action);

      expect(result.recipeCollection.length).toEqual(1);
      expect(result.recipeCreating).toEqual(false);
      expect(result.recipeCreateError).toEqual(null);
      expect(
        statesEqual(result, state, ['recipeCollection', 'recipeCreating', 'recipeCreateError'])
      ).toBeTruthy();
    });
  });

  describe('UpdateRecipe', () => {
    test('sets recipeUpdating, recipeUpdateError and does not modify other state properties', () => {
      const payload = {} as any;
      const action = fromRecipeActions.updateRecipe({ payload });
      const result = recipeReducer(state, action);

      expect(result.recipeUpdating).toEqual(true);
      expect(result.recipeUpdateError).toEqual(null);
      expect(statesEqual(result, state, ['recipeUpdating', 'recipeUpdateError'])).toBeTruthy();
    });
  });

  describe('UpdateRecipeFail', () => {
    test('sets recipeUpdating, recipeUpdateError and does not modify other state properties', () => {
      const payload = {} as any;
      const action = fromRecipeActions.updateRecipeFail({ payload });
      const result = recipeReducer(state, action);

      expect(result.recipeUpdating).toEqual(false);
      expect(result.recipeUpdateError).toEqual(payload);
      expect(statesEqual(result, state, ['recipeUpdating', 'recipeUpdateError'])).toBeTruthy();
    });
  });

  describe('UpdateRecipeSuccess', () => {
    test('sets recipeCollection, recipeUpdating, recipeUpdateError and does not modify other state properties', () => {
      state = { ...initialState, recipeCollection: [{ id: '1', name: 'test' } as any] };
      const payload = { id: '1', name: 'test2' } as any;
      const action = fromRecipeActions.updateRecipeSuccess({ payload });
      const result = recipeReducer(state, action);

      expect((result as any).recipeCollection[0].name).toEqual('test2');
      expect((result as any).recipeUpdating).toEqual(false);
      expect((result as any).recipeUpdateError).toEqual(null);
      expect(
        statesEqual(result, state, ['recipeCollection', 'recipeUpdating', 'recipeUpdateError'])
      ).toBeTruthy();
    });
  });

  describe('RemoveRecipe', () => {
    test('sets recipeRemoving, recipeRemoveError and does not modify other state properties', () => {
      const payload = {} as any;
      const action = fromRecipeActions.removeRecipe({ payload });
      const result = recipeReducer(state, action);

      expect(result.recipeRemoving).toEqual(true);
      expect(result.recipeRemoveError).toEqual(null);
      expect(statesEqual(result, state, ['recipeRemoving', 'recipeRemoveError'])).toBeTruthy();
    });
  });

  describe('RemoveRecipeFail', () => {
    test('sets recipeRemoving, recipeRemoveError and does not modify other state properties', () => {
      const payload = {} as any;
      const action = fromRecipeActions.removeRecipeFail({ payload });
      const result = recipeReducer(state, action);

      expect(result.recipeRemoving).toEqual(false);
      expect(result.recipeRemoveError).toEqual(payload);
      expect(statesEqual(result, state, ['recipeRemoving', 'recipeRemoveError'])).toBeTruthy();
    });
  });

  describe('RemoveRecipeSuccess', () => {
    test('sets recipeCollection, recipeRemoving, recipeRemoveError and does not modify other state properties', () => {
      state = { ...initialState, recipeCollection: [{ id: '1', name: 'test' } as any] };
      const payload = { id: '1', name: 'test2' } as any;
      const action = fromRecipeActions.removeRecipeSuccess({ payload });
      const result = recipeReducer(state, action);

      expect(result.recipeCollection.length).toEqual(0);
      expect(result.recipeRemoving).toEqual(false);
      expect(result.recipeRemoveError).toEqual(null);
      expect(
        statesEqual(result, state, ['recipeCollection', 'recipeRemoving', 'recipeRemoveError'])
      ).toBeTruthy();
    });
  });
});
