import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { RecipePartialState } from './recipe.reducer';
import { recipeQuery } from './recipe.selectors';
import * as fromRecipeActions from './recipe.actions';
import { Recipe } from '../../../../domain/src';
import { GetRecipeRequestPayload } from '../resources/request-payloads/get-recipe.request-payload';
import { GetRecipeCollectionRequestPayload } from '../resources/request-payloads/get-recipe-collection.request-payload';
import { CreateRecipeRequestPayload } from '../resources/request-payloads/create-recipe.request-payload';
import { UpdateRecipeRequestPayload } from '../resources/request-payloads/update-recipe.request-payload';
import { RemoveRecipeRequestPayload } from '../resources/request-payloads/remove-recipe.request-payload';

@Injectable()
export class RecipeFacade {
  recipe$ = this.store.pipe(select(recipeQuery.getRecipe));
  recipeLoading$ = this.store.pipe(select(recipeQuery.getRecipeLoading));
  recipeLoadError$ = this.store.pipe(select(recipeQuery.getRecipeLoadError));
  recipeCollection$ = this.store.pipe(select(recipeQuery.getRecipeCollection));
  recipeCollectionLoading$ = this.store.pipe(select(recipeQuery.getRecipeCollectionLoading));
  recipeCollectionLoadError$ = this.store.pipe(select(recipeQuery.getRecipeCollectionLoadError));
  recipeCreating$ = this.store.pipe(select(recipeQuery.getRecipeCreating));
  recipeCreateError$ = this.store.pipe(select(recipeQuery.getRecipeCreateError));
  recipeUpdating$ = this.store.pipe(select(recipeQuery.getRecipeUpdating));
  recipeUpdateError$ = this.store.pipe(select(recipeQuery.getRecipeUpdateError));
  recipeRemoving$ = this.store.pipe(select(recipeQuery.getRecipeRemoving));
  recipeRemoveError$ = this.store.pipe(select(recipeQuery.getRecipeRemoveError));
  constructor(private store: Store<RecipePartialState>) {}

  getRecipe(data: GetRecipeRequestPayload): void {
    this.store.dispatch(fromRecipeActions.getRecipe({ payload: data }));
  }

  getRecipeCollection(data: GetRecipeCollectionRequestPayload): void {
    this.store.dispatch(fromRecipeActions.getRecipeCollection({ payload: data }));
  }

  createRecipe(data: CreateRecipeRequestPayload): void {
    this.store.dispatch(fromRecipeActions.createRecipe({ payload: data }));
  }

  updateRecipe(data: UpdateRecipeRequestPayload): void {
    this.store.dispatch(fromRecipeActions.updateRecipe({ payload: data }));
  }

  removeRecipe(data: RemoveRecipeRequestPayload): void {
    this.store.dispatch(fromRecipeActions.removeRecipe({ payload: data }));
  }
}
