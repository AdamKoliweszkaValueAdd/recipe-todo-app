import {Component, OnInit} from '@angular/core';
import {RecipeFacade} from "@recipes/data-access";
import {ActivatedRoute, Router} from "@angular/router";
import {Recipe} from "@recipes/domain";

@Component({
  selector: 'recipes-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  recipeId: string | undefined;

  constructor(private recipeFacade: RecipeFacade, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
          this.recipeId = params ? params["recipeid"] : null;
          console.log(this.recipeId); // price
          if (this.recipeId) this.recipeFacade.getRecipe({id: this.recipeId})
        }
      );
  }

  get recipe$() {
    return this.recipeFacade.recipe$;
  }

  onRemoveRecipe(recipe: Recipe) {

  }

  onEditRecipe(recipe: Recipe) {
    this.router.navigateByUrl('edit?recipeid=' + recipe._id);
  }

}
