import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {
  RECIPE_FEATURE_KEY,
  initialState as recipeInitialState,
  recipeReducer,
} from './+state/recipe.reducer';
import {RecipeEffects} from './+state/recipe.effects';
import {RecipeFacade} from './+state/recipe.facade';
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(RECIPE_FEATURE_KEY, recipeReducer, {
      initialState: recipeInitialState,
    }),
    EffectsModule.forFeature([RecipeEffects]),
    HttpClientModule,
  ],
  providers: [RecipeFacade, {
    provide: "BASE_API_URL",
    useValue: "https://crudcrud.com/api/c8b5e13ee4cb47b1893aa46bbba0f8b5/recipes"
  }],
})
export class DataAccessModule {
}
