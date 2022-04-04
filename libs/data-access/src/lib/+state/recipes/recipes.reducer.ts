import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import { fromRecipeActions } from './recipes.actions';
import { RecipesEntity } from './recipes.models';
import {Recipe} from "@recipes/domain";
import {HttpErrorResponse} from "@angular/common/http";

export const RECIPES_FEATURE_KEY = 'recipes';

export interface RecipeEntityState extends EntityState<Recipe> {}

export interface RecipeState {
  recipeCollection: RecipeEntityState;
  recipeCollectionLoading: boolean;
  recipeCollectionLoadError: HttpErrorResponse | null;
  addingRecipe: boolean;
  addingRecipeError: HttpErrorResponse | null;
}

export interface RecipePartialState {
  readonly [RECIPES_FEATURE_KEY]: RecipeState;
}

export const adapter: EntityAdapter<Recipe> = createEntityAdapter<Recipe>();

export const initialState: RecipeState = {
  recipeCollection: adapter.getInitialState(),
  recipeCollectionLoading: false,
  recipeCollectionLoadError: null,
  addingRecipe: false,
  addingRecipeError: null
};

export function recipeReducer(
  state: RecipeState = initialState,
  action: fromRecipeActions.CollectiveType
): RecipeState {
  switch (action.type) {
    case fromRecipeActions.Types.GetRecipeCollection: {
      state = {
        ...state,
        recipeCollection: adapter.getInitialState(),
        recipeCollectionLoading: true,
        recipeCollectionLoadError: null
      };
      break;
    }

    case fromRecipeActions.Types.GetRecipeCollectionFail: {
      state = {
        ...state,
        recipeCollection: adapter.getInitialState(),
        recipeCollectionLoading: false,
        recipeCollectionLoadError: action.payload
      };
      break;
    }

    case fromRecipeActions.Types.GetRecipeCollectionSuccess: {
      state = {
        ...state,
        recipeCollection: adapter.setAll(action.payload, state.recipeCollection),
        recipeCollectionLoading: false,
        recipeCollectionLoadError: null
      };
      break;
    }

    case fromRecipeActions.Types.AddRecipe: {
      state = {
        ...state,
        addingRecipe: true,
        addingRecipeError: null
      };
      break;
    }

    case fromRecipeActions.Types.AddRecipeFail: {
      state = {
        ...state,
        addingRecipe: false,
        addingRecipeError: action.payload
      };
      break;
    }

    case fromRecipeActions.Types.AddRecipeSuccess: {
      state = {
        ...state,
        addingRecipe: false,
        addingRecipeError: null
      };
      break;
    }
  }

  return state;
}
