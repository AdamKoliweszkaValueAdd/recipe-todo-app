import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RECIPE_FEATURE_KEY, RecipeState } from './recipe.reducer';

// Lookup the 'Recipe' feature state managed by NgRx
const getRecipeState = createFeatureSelector<RecipeState>(RECIPE_FEATURE_KEY);

const getRecipe = createSelector(getRecipeState, state => state.recipe);

const getRecipeLoading = createSelector(getRecipeState, state => state.recipeLoading);

const getRecipeLoadError = createSelector(getRecipeState, state => state.recipeLoadError);

const getRecipeCollection = createSelector(getRecipeState, state => state.recipeCollection);

const getRecipeCollectionLoading = createSelector(
  getRecipeState,
  state => state.recipeCollectionLoading
);

const getRecipeCollectionLoadError = createSelector(
  getRecipeState,
  state => state.recipeCollectionLoadError
);

const getRecipeCreating = createSelector(getRecipeState, state => state.recipeCreating);

const getRecipeCreateError = createSelector(getRecipeState, state => state.recipeCreateError);

const getRecipeUpdating = createSelector(getRecipeState, state => state.recipeUpdating);

const getRecipeUpdateError = createSelector(getRecipeState, state => state.recipeUpdateError);

const getRecipeRemoving = createSelector(getRecipeState, state => state.recipeRemoving);

const getRecipeRemoveError = createSelector(getRecipeState, state => state.recipeRemoveError);

export const recipeQuery = {
  getRecipe,
  getRecipeLoading,
  getRecipeLoadError,
  getRecipeCollection,
  getRecipeCollectionLoading,
  getRecipeCollectionLoadError,
  getRecipeCreating,
  getRecipeCreateError,
  getRecipeUpdating,
  getRecipeUpdateError,
  getRecipeRemoving,
  getRecipeRemoveError
};
