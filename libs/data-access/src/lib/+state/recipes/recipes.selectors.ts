import { createFeatureSelector, createSelector } from '@ngrx/store';
import {RECIPES_FEATURE_KEY, RecipeState} from './recipes.reducer';

// Lookup the 'Recipes' feature state managed by NgRx
const getRecipeState = createFeatureSelector<RecipeState>(RECIPES_FEATURE_KEY);

const getRecipeCollectionEntityState = createSelector(
  getRecipeState,
  state => state.recipeCollection
);

const getRecipeCollection = createSelector(
  getRecipeState,
  state => state.recipeCollection
);

const getRecipeCollectionLoading = createSelector(
  getRecipeState,
  state => state.recipeCollectionLoading
);

const getRecipeCollectionLoadError = createSelector(
  getRecipeState,
  state => state.recipeCollectionLoadError
);

const getAddingRecipe = createSelector(
  getRecipeState,
  state => state.addingRecipe
);

const getAddingRecipeError = createSelector(
  getRecipeState,
  state => state.addingRecipeError
);

export const RecipeQuery = {
  getRecipeCollection,
  getRecipeCollectionLoading,
  getRecipeCollectionLoadError,
  getAddingRecipe,
  getAddingRecipeError
};
