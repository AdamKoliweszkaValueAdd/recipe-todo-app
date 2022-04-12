import { initialState, RECIPE_FEATURE_KEY, RecipeState } from './recipe.reducer';
import { recipeQuery } from './recipe.selectors';

describe('Recipe Selectors', () => {
  let storeState: { [RECIPE_FEATURE_KEY]: RecipeState };

  beforeEach(() => {
    storeState = {
      [RECIPE_FEATURE_KEY]: initialState
    };
  });

  test('getRecipe() returns recipe value', () => {
    const result = recipeQuery.getRecipe(storeState);

    expect(result).toBe(storeState[RECIPE_FEATURE_KEY].recipe);
  });

  test('getRecipeLoading() returns recipeLoading value', () => {
    const result = recipeQuery.getRecipeLoading(storeState);

    expect(result).toBe(storeState[RECIPE_FEATURE_KEY].recipeLoading);
  });

  test('getRecipeLoadError() returns recipeLoadError value', () => {
    const result = recipeQuery.getRecipeLoadError(storeState);

    expect(result).toBe(storeState[RECIPE_FEATURE_KEY].recipeLoadError);
  });

  test('getRecipeCollection() returns recipeCollection value', () => {
    const result = recipeQuery.getRecipeCollection(storeState);

    expect(result).toBe(storeState[RECIPE_FEATURE_KEY].recipeCollection);
  });

  test('getRecipeCollectionLoading() returns recipeCollectionLoading value', () => {
    const result = recipeQuery.getRecipeCollectionLoading(storeState);

    expect(result).toBe(storeState[RECIPE_FEATURE_KEY].recipeCollectionLoading);
  });

  test('getRecipeCollectionLoadError() returns recipeCollectionLoadError value', () => {
    const result = recipeQuery.getRecipeCollectionLoadError(storeState);

    expect(result).toBe(storeState[RECIPE_FEATURE_KEY].recipeCollectionLoadError);
  });

  test('getRecipeCreating() returns recipeCreating value', () => {
    const result = recipeQuery.getRecipeCreating(storeState);

    expect(result).toBe(storeState[RECIPE_FEATURE_KEY].recipeCreating);
  });

  test('getRecipeCreateError() returns recipeCreateError value', () => {
    const result = recipeQuery.getRecipeCreateError(storeState);

    expect(result).toBe(storeState[RECIPE_FEATURE_KEY].recipeCreateError);
  });

  test('getRecipeUpdating() returns recipeUpdating value', () => {
    const result = recipeQuery.getRecipeUpdating(storeState);

    expect(result).toBe(storeState[RECIPE_FEATURE_KEY].recipeUpdating);
  });

  test('getRecipeUpdateError() returns recipeUpdateError value', () => {
    const result = recipeQuery.getRecipeUpdateError(storeState);

    expect(result).toBe(storeState[RECIPE_FEATURE_KEY].recipeUpdateError);
  });

  test('getRecipeRemoving() returns recipeRemoving value', () => {
    const result = recipeQuery.getRecipeRemoving(storeState);

    expect(result).toBe(storeState[RECIPE_FEATURE_KEY].recipeRemoving);
  });

  test('getRecipeRemoveError() returns recipeRemoveError value', () => {
    const result = recipeQuery.getRecipeRemoveError(storeState);

    expect(result).toBe(storeState[RECIPE_FEATURE_KEY].recipeRemoveError);
  });
});
