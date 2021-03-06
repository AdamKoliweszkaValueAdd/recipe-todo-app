import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {RecipePartialState} from './recipe.reducer';
import {recipeQuery} from './recipe.selectors';
import * as fromRecipeActions from './recipe.actions';
import {
  CreateRecipeRequestPayload,
  GetRecipeRequestPayload,
  RemoveRecipeRequestPayload,
  UpdateRecipeRequestPayload
} from "@recipes/domain";

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
  currentMessageOfStatus$ = this.store.pipe(select(recipeQuery.getCurrentMessageOfStatus));

  constructor(private store: Store<RecipePartialState>) {
  }

  getRecipe(data: GetRecipeRequestPayload): void {
    this.store.dispatch(fromRecipeActions.getRecipe({payload: data}));
  }

  getRecipeCollection(): void {
    this.store.dispatch(fromRecipeActions.getRecipeCollection());
  }

  createRecipe(data: CreateRecipeRequestPayload): void {
    this.store.dispatch(fromRecipeActions.createRecipe({payload: data}));
  }

  updateRecipe(data: UpdateRecipeRequestPayload): void {
    this.store.dispatch(fromRecipeActions.updateRecipe({payload: data}));
  }

  removeRecipe(data: RemoveRecipeRequestPayload): void {
    this.store.dispatch(fromRecipeActions.removeRecipe({payload: data}));
  }
}
