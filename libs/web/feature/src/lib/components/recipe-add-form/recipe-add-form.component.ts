import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {Recipe} from "@recipes/domain";
import {RecipeFacade} from "@recipes/data-access";
import {RecipeFormContentComponent} from "@recipes/ui";

@Component({
  selector: 'recipes-recipe-add-form',
  templateUrl: './recipe-add-form.component.html',
  styleUrls: ['./recipe-add-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeAddFormComponent implements OnInit {
  @ViewChild("recipeFormContentComponent")
  recipeFormContentComponent: RecipeFormContentComponent | undefined;

  constructor(private router: Router, private recipeFacade: RecipeFacade) {
  }

  ngOnInit(): void {
  }

  onCancelForm() {
    this.router.navigateByUrl('');
  }

  onAddRecipe(recipe: Recipe) {
    this.recipeFacade.createRecipe({data: recipe});
  }
}
