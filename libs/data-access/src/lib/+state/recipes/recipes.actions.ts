import {Action, createAction, props} from '@ngrx/store';
import { RecipesEntity } from './recipes.models';
import {HttpErrorResponse} from "@angular/common/http";
import {Recipe} from "@recipes/domain";

export namespace fromRecipeActions {
  export enum Types {
    GetRecipeCollection = '[Recipe] Get Recipe Collection',
    GetRecipeCollectionFail = '[Recipe] Get Recipe Collection Fail',
    GetRecipeCollectionSuccess = '[Recipe] Get Recipe Collection Success',
    AddRecipe = '[Recipe] Add Recipe',
    AddRecipeFail = '[Recipe] Add Recipe Fail',
    AddRecipeSuccess = '[Recipe] Add Recipe Success',
    DeleteRecipe = '[Recipe] Delete Recipe',
    DeleteRecipeFail = '[Recipe] Delete Recipe Fail',
    DeleteRecipeSuccess = '[Recipe] Delete Recipe Success',
    EditRecipe = '[Recipe] Edit Recipe',
    EditRecipeFail = '[Recipe] Edit Recipe Fail',
    EditRecipeSuccess = '[Recipe] Edit Recipe Success'
  }

  export class GetRecipeCollection implements Action {
    readonly type = Types.GetRecipeCollection;
  }

  export class GetRecipeCollectionFail implements Action {
    readonly type = Types.GetRecipeCollectionFail;

    constructor(public payload: HttpErrorResponse) {}
  }

  export class GetRecipeCollectionSuccess implements Action {
    readonly type = Types.GetRecipeCollectionSuccess;

    constructor(public payload: Recipe[]) {}
  }

  export class AddRecipe implements Action {
    readonly type = Types.AddRecipe;

    constructor(public payload: Recipe) {}
  }

  export class AddRecipeFail implements Action {
    readonly type = Types.AddRecipeFail;

    constructor(public payload: HttpErrorResponse) {}
  }

  export class AddRecipeSuccess implements Action {
    readonly type = Types.AddRecipeSuccess;

    constructor(public payload: Recipe) {}
  }

  export class DeleteRecipe implements Action {
    readonly type = Types.DeleteRecipe;

    constructor(public payload: Recipe) {}
  }

  export class DeleteRecipeFail implements Action {
    readonly type = Types.DeleteRecipeFail;

    constructor(public payload: HttpErrorResponse) {}
  }

  export class DeleteRecipeSuccess implements Action {
    readonly type = Types.DeleteRecipeSuccess;
  }

  export class EditRecipe implements Action {
    readonly type = Types.EditRecipe;

    constructor(public payload: Recipe) {}
  }

  export class EditRecipeFail implements Action {
    readonly type = Types.EditRecipeFail;

    constructor(public payload: HttpErrorResponse) {}
  }

  export class EditRecipeSuccess implements Action {
    readonly type = Types.EditRecipeSuccess;
  }

  export type CollectiveType =
    | GetRecipeCollection
    | GetRecipeCollectionFail
    | GetRecipeCollectionSuccess
    | AddRecipe
    | AddRecipeFail
    | AddRecipeSuccess
    | DeleteRecipe
    | DeleteRecipeFail
    | DeleteRecipeSuccess
    | EditRecipe
    | EditRecipeFail
    | EditRecipeSuccess;
}
