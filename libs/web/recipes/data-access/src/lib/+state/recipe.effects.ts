import { Injectable } from '@angular/core';
import * as fromRecipeActions from './recipe.actions';
import { RecipePartialState } from './recipe.reducer';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RecipesDataService } from '../services/recipes-data.service';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import { HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class RecipeEffects {
  getRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromRecipeActions.getRecipe),
      fetch({
        id: () => {},
        run: ({ payload }) => {
          return this.recipesDataService
            .getRecipe(payload)
            .pipe(map(data => fromRecipeActions.getRecipeSuccess({ payload: data })));
        },
        onError: (action, error: HttpErrorResponse) => {
          return fromRecipeActions.getRecipeFail({ payload: error });
        }
      })
    )
  );

  getRecipeCollection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromRecipeActions.getRecipeCollection),
      fetch({
        id: () => {},
        run: ({ payload }) => {
          return this.recipesDataService
            .getRecipeCollection()
            .pipe(map(data => fromRecipeActions.getRecipeCollectionSuccess({ payload: data })));
        },
        onError: (action, error: HttpErrorResponse) => {
          return fromRecipeActions.getRecipeCollectionFail({ payload: error });
        }
      })
    )
  );

  createRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromRecipeActions.createRecipe),
      pessimisticUpdate({
        run: ({ payload }) => {
          return this.recipesDataService
            .createRecipe(payload)
            .pipe(map(data => fromRecipeActions.createRecipeSuccess({ payload: data })));
        },
        onError: (action, error: HttpErrorResponse) => {
          return fromRecipeActions.createRecipeFail({ payload: error });
        }
      })
    )
  );

  updateRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromRecipeActions.updateRecipe),
      pessimisticUpdate({
        run: ({ payload }) => {
          return this.recipesDataService
            .updateRecipe(payload)
            .pipe(map(data => fromRecipeActions.updateRecipeSuccess({ payload: data })));
        },
        onError: (action, error: HttpErrorResponse) => {
          return fromRecipeActions.updateRecipeFail({ payload: error });
        }
      })
    )
  );

  removeRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromRecipeActions.removeRecipe),
      pessimisticUpdate({
        run: ({ payload }) => {
          return this.recipesDataService
            .removeRecipe(payload)
            .pipe(map(data => fromRecipeActions.removeRecipeSuccess({ payload })));
        },
        onError: (action, error: HttpErrorResponse) => {
          return fromRecipeActions.removeRecipeFail({ payload: error });
        }
      })
    )
  );

  constructor(private actions$: Actions, private recipesDataService: RecipesDataService) {}
}
