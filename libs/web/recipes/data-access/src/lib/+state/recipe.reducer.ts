import * as fromRecipeActions from './recipe.actions';
import {on, createReducer, ActionReducer} from '@ngrx/store';
import {HttpErrorResponse} from '@angular/common/http';
import {Recipe} from "@recipes/domain";


export const RECIPE_FEATURE_KEY = 'recipe';

export interface RecipeState {
  recipe: Recipe | null;
  recipeLoading: boolean;
  recipeLoadError: HttpErrorResponse | null;
  recipeCollection: Recipe[];
  recipeCollectionLoading: boolean;
  recipeCollectionLoadError: HttpErrorResponse | null;
  recipeCreating: boolean;
  recipeCreateError: HttpErrorResponse | null;
  recipeUpdating: boolean;
  recipeUpdateError: HttpErrorResponse | null;
  recipeRemoving: boolean;
  recipeRemoveError: HttpErrorResponse | null;
  currentMessageOfStatus: string | null;
}

export interface RecipePartialState {
  readonly [RECIPE_FEATURE_KEY]: RecipeState;
}

export const initialState: RecipeState = {
  recipe: null,
  recipeLoading: false,
  recipeLoadError: null,
  recipeCollection: [],
  recipeCollectionLoading: false,
  recipeCollectionLoadError: null,
  recipeCreating: false,
  recipeCreateError: null,
  recipeUpdating: false,
  recipeUpdateError: null,
  recipeRemoving: false,
  recipeRemoveError: null,
  currentMessageOfStatus: null
};

export const recipeReducer = createReducer(
  initialState,
  on(
    fromRecipeActions.getRecipe,
    (state, action): RecipeState => ({
      ...state,
      recipe: null,
      recipeLoading: true,
      recipeLoadError: null
    })
  ),
  on(
    fromRecipeActions.getRecipeFail,
    (state, action): RecipeState => ({
      ...state,
      recipe: null,
      recipeLoading: false,
      recipeLoadError: action.payload
    })
  ),
  on(
    fromRecipeActions.getRecipeSuccess,
    (state, action): RecipeState => ({
      ...state,
      recipe: action.payload,
      recipeLoading: false,
      recipeLoadError: null
    })
  ),
  on(
    fromRecipeActions.getRecipeCollection,
    (state, action): RecipeState => ({
      ...state,
      recipeCollection: [],
      recipeCollectionLoading: true,
      recipeCollectionLoadError: null
    })
  ),
  on(
    fromRecipeActions.getRecipeCollectionFail,
    (state, action): RecipeState => ({
      ...state,
      recipeCollection: [],
      recipeCollectionLoading: false,
      recipeCollectionLoadError: action.payload
    })
  ),
  on(
    fromRecipeActions.getRecipeCollectionSuccess,
    (state, action): RecipeState => ({
      ...state,
      recipeCollection: action.payload,
      recipeCollectionLoading: false,
      recipeCollectionLoadError: null
    })
  ),
  on(
    fromRecipeActions.createRecipe,
    (state, action): RecipeState => ({
      ...state,
      recipeCreating: true,
      recipeCreateError: null
    })
  ),
  on(
    fromRecipeActions.createRecipeFail,
    (state, action): RecipeState => ({
      ...state,
      recipeCreating: false,
      recipeCreateError: action.payload
    })
  ),
  on(
    fromRecipeActions.createRecipeSuccess,
    (state, action): RecipeState => ({
      ...state,
      recipeCollection: state.recipeCollection.concat(action.payload),
      recipeCreating: false,
      recipeCreateError: null
    })
  ),
  on(
    fromRecipeActions.updateRecipe,
    (state, action): RecipeState => ({
      ...state,
      recipeUpdating: true,
      recipeUpdateError: null
    })
  ),
  on(
    fromRecipeActions.updateRecipeFail,
    (state, action): RecipeState => ({
      ...state,
      recipeUpdating: false,
      recipeUpdateError: action.payload
    })
  ),
  on(
    fromRecipeActions.updateRecipeSuccess,
    (state, action): RecipeState => ({
      ...state,
      recipeCollection: state.recipeCollection.map(e =>
        e._id === action.payload._id ? action.payload : e
      ),
      recipeUpdating: false,
      recipeUpdateError: null
    })
  ),
  on(
    fromRecipeActions.removeRecipe,
    (state, action): RecipeState => ({
      ...state,
      recipeRemoving: true,
      recipeRemoveError: null
    })
  ),
  on(
    fromRecipeActions.removeRecipeFail,
    (state, action): RecipeState => ({
      ...state,
      recipeRemoving: false,
      recipeRemoveError: action.payload
    })
  ),
  on(
    fromRecipeActions.removeRecipeSuccess,
    (state, action): RecipeState => ({
      ...state,
      recipeCollection: state.recipeCollection.filter(e => e._id !== action.payload.id),
      recipeRemoving: false,
      recipeRemoveError: null
    })
  ),
  on(
    fromRecipeActions.setStatusMessage,
    (state, action): RecipeState => ({
      ...state,
      currentMessageOfStatus: action.payload,
    })
  )
);
