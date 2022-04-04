import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {recipeReducer,RECIPES_FEATURE_KEY} from './+state/recipes/recipes.reducer';
import { RecipesEffects } from './+state/recipes/recipes.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      RECIPES_FEATURE_KEY,
      recipeReducer
    ),
    EffectsModule.forFeature([RecipesEffects]),
  ],
})
export class DataAccessModule {}
