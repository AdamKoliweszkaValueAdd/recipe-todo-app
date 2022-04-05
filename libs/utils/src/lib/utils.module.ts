import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterRecipesPipe } from './pipes/filter-recipes.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    FilterRecipesPipe
  ],
  exports: [FilterRecipesPipe]
})
export class UtilsModule {}
