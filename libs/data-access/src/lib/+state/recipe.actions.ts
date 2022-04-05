import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { GetRecipeRequestPayload } from '../resources/request-payloads/get-recipe.request-payload';
import { GetRecipeCollectionRequestPayload } from '../resources/request-payloads/get-recipe-collection.request-payload';
import { CreateRecipeRequestPayload } from '../resources/request-payloads/create-recipe.request-payload';
import { UpdateRecipeRequestPayload } from '../resources/request-payloads/update-recipe.request-payload';
import { RemoveRecipeRequestPayload } from '../resources/request-payloads/remove-recipe.request-payload';
import {Recipe} from "@recipes/domain";

export enum Types {
  GetRecipe = '[RECIPE] Get Recipe',
  GetRecipeFail = '[RECIPE] Get Recipe Fail',
  GetRecipeSuccess = '[RECIPE] Get Recipe Success',
  GetRecipeCollection = '[RECIPE] Get Recipe Collection',
  GetRecipeCollectionFail = '[RECIPE] Get Recipe Collection Fail',
  GetRecipeCollectionSuccess = '[RECIPE] Get Recipe Collection Success',
  CreateRecipe = '[RECIPE] Create Recipe',
  CreateRecipeFail = '[RECIPE] Create Recipe Fail',
  CreateRecipeSuccess = '[RECIPE] Create Recipe Success',
  UpdateRecipe = '[RECIPE] Update Recipe',
  UpdateRecipeFail = '[RECIPE] Update Recipe Fail',
  UpdateRecipeSuccess = '[RECIPE] Update Recipe Success',
  RemoveRecipe = '[RECIPE] Remove Recipe',
  RemoveRecipeFail = '[RECIPE] Remove Recipe Fail',
  RemoveRecipeSuccess = '[RECIPE] Remove Recipe Success'
}

export const getRecipe = createAction(
  Types.GetRecipe,
  props<{ payload: GetRecipeRequestPayload }>()
);

export const getRecipeFail = createAction(
  Types.GetRecipeFail,
  props<{ payload: HttpErrorResponse }>()
);

export const getRecipeSuccess = createAction(Types.GetRecipeSuccess, props<{ payload: Recipe }>());

export const getRecipeCollection = createAction(
  Types.GetRecipeCollection,
  props<{ payload: GetRecipeCollectionRequestPayload }>()
);

export const getRecipeCollectionFail = createAction(
  Types.GetRecipeCollectionFail,
  props<{ payload: HttpErrorResponse }>()
);

export const getRecipeCollectionSuccess = createAction(
  Types.GetRecipeCollectionSuccess,
  props<{ payload: Recipe[] }>()
);

export const createRecipe = createAction(
  Types.CreateRecipe,
  props<{ payload: CreateRecipeRequestPayload }>()
);

export const createRecipeFail = createAction(
  Types.CreateRecipeFail,
  props<{ payload: HttpErrorResponse }>()
);

export const createRecipeSuccess = createAction(
  Types.CreateRecipeSuccess,
  props<{ payload: Recipe }>()
);

export const updateRecipe = createAction(
  Types.UpdateRecipe,
  props<{ payload: UpdateRecipeRequestPayload }>()
);

export const updateRecipeFail = createAction(
  Types.UpdateRecipeFail,
  props<{ payload: HttpErrorResponse }>()
);

export const updateRecipeSuccess = createAction(
  Types.UpdateRecipeSuccess,
  props<{ payload: Recipe }>()
);

export const removeRecipe = createAction(
  Types.RemoveRecipe,
  props<{ payload: RemoveRecipeRequestPayload }>()
);

export const removeRecipeFail = createAction(
  Types.RemoveRecipeFail,
  props<{ payload: HttpErrorResponse }>()
);

export const removeRecipeSuccess = createAction(
  Types.RemoveRecipeSuccess,
  props<{ payload: RemoveRecipeRequestPayload }>()
);
