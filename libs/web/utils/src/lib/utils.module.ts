import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterRecipesPipe} from './pipes/filter-recipes.pipe';
import {PreparationTimePipe} from './pipes/preparation-time.pipe';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [
    FilterRecipesPipe,
    PreparationTimePipe,
  ],
  exports: [FilterRecipesPipe,
    PreparationTimePipe,
  ]
})
export class UtilsModule {
}
