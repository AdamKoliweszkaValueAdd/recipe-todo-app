import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeFacade} from "@recipes/data-access";
import {Recipe} from "@recipes/domain";
import {filter, pluck} from "rxjs";
import {RecipeFormContentComponent} from "../recipe-form-content/recipe-form-content.component";

@Component({
  selector: 'recipes-recipe-edit-form',
  templateUrl: './recipe-edit-form.component.html',
  styleUrls: ['./recipe-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeEditFormComponent implements OnInit {

  @ViewChild("recipeFormContentComponent")
  recipeFormContentComponent: RecipeFormContentComponent | undefined;

  recipeId: string | undefined;

  get recipeLoading$(){
    return this.recipeFacade.recipeLoading$
  }

  get recipe$() {
    return this.recipeFacade.recipe$;
  }

  constructor(private recipeFacade: RecipeFacade, private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit(): void {
    this.route.queryParams.pipe(pluck('recipeid'), filter(value => !!value)).subscribe(recipeId => {
      this.recipeId = recipeId;
      this.recipeFacade.getRecipe({id: recipeId});
    });
  }

  onCancelForm() {
    this.router.navigateByUrl('');
  }

  onEditRecipe(recipe: Recipe) {
    this.recipeFacade.updateRecipe({data: recipe})
  }
}
