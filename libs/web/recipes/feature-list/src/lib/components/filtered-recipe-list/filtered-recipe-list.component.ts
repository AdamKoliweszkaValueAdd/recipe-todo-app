import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "@recipes/domain";

@Component({
  selector: 'recipes-filtered-recipe-list',
  templateUrl: './filtered-recipe-list.component.html',
  styleUrls: ['./filtered-recipe-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilteredRecipeListComponent implements OnInit {

  @Input() recipes: Recipe[] | undefined | null;

  @Output() showDetail = new EventEmitter<Recipe>();
  @Output() removeRecipe = new EventEmitter<Recipe>();
  @Output() editRecipe = new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onRemoveRecipe(recipe: Recipe) {
    this.removeRecipe.emit(recipe);
  }

  onShowDetailOfRecipe(recipe: Recipe) {
    this.showDetail.emit(recipe);
  }

  onEditRecipe(recipe: Recipe) {
    this.editRecipe.emit(recipe);
  }

  identify(index: number, item: Recipe) {
    return item._id;
  }

}
