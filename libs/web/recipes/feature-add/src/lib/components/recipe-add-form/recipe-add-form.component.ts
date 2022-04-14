import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {Recipe} from "@recipes/domain";
import {RecipeFacade} from "@recipes/data-access";
import {RecipeFormContentComponent} from "../recipe-form-content/recipe-form-content.component";

@Component({
  selector: 'recipes-recipe-add-form',
  templateUrl: './recipe-add-form.component.html',
  styleUrls: ['./recipe-add-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeAddFormComponent {
  @ViewChild("recipeFormContentComponent")
  recipeFormContentComponent: RecipeFormContentComponent | undefined;

  constructor(private router: Router, public recipeFacade: RecipeFacade) {
  }

  onCancelForm() {
    this.router.navigateByUrl('');
  }

  onAddRecipe(recipe: Recipe) {
    this.recipeFacade.createRecipe({data: recipe});
  }
}
