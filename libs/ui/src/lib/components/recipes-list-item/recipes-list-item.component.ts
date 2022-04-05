import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "@recipes/domain";

@Component({
  selector: 'recipes-recipes-list-item',
  templateUrl: './recipes-list-item.component.html',
  styleUrls: ['./recipes-list-item.component.scss']
})
export class RecipesListItemComponent implements OnInit {
  @Input() recipe: Recipe | undefined;

  @Output()showDetail = new EventEmitter<Recipe>();
  @Output()removeRecipe = new EventEmitter<Recipe>();
  @Output()editRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickRecipe(){
    this.showDetail.emit(this.recipe);
  }

  onClickRemove(evt: Event){
    evt.stopPropagation();
    this.removeRecipe.emit(this.recipe);
  }

  onClickEdit(evt: Event){
    evt.stopPropagation();
    this.editRecipe.emit(this.recipe);
  }

}
