import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeFacade} from "@recipes/data-access";

@Component({
  selector: 'recipes-recipe-edit-form',
  templateUrl: './recipe-edit-form.component.html',
  styleUrls: ['./recipe-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeEditFormComponent implements OnInit {

  recipeId: string | undefined;

  get recipe$() {
    return this.recipeFacade.recipe$;
  }

  constructor(private recipeFacade: RecipeFacade, private route: ActivatedRoute,
              private router: Router) {
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

  onCancelForm() {
    this.router.navigateByUrl('');
  }

}