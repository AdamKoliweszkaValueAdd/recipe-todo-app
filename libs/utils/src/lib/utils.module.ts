import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterRecipesPipe} from './pipes/filter-recipes.pipe';
import {PreparationTimePipe} from './pipes/preparation-time.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    FilterRecipesPipe,
    PreparationTimePipe
  ],
  exports: [FilterRecipesPipe, PreparationTimePipe]
})
export class UtilsModule {
}
