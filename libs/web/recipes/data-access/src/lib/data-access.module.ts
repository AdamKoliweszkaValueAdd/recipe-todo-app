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
    useValue: "https://crudcrud.com/api/11c2b27fbb834fcba06a9f5b691eab58/recipes"
  }],
})
export class DataAccessModule {
}
