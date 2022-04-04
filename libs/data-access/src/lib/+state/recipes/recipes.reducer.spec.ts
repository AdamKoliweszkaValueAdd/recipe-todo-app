import { Action } from '@ngrx/store';

import * as RecipesActions from './recipes.actions';
import { RecipesEntity } from './recipes.models';
import { State, initialState, reducer } from './recipes.reducer';

describe('Recipes Reducer', () => {
  const createRecipesEntity = (id: string, name = ''): RecipesEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Recipes actions', () => {
    it('loadRecipesSuccess should return the list of known Recipes', () => {
      const recipes = [
        createRecipesEntity('PRODUCT-AAA'),
        createRecipesEntity('PRODUCT-zzz'),
      ];
      const action = RecipesActions.loadRecipesSuccess({ recipes });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
