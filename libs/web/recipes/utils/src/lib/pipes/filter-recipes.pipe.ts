import {Pipe, PipeTransform} from '@angular/core';
import {Ingradient, Recipe} from "@recipes/domain";

@Pipe({
  name: 'filterRecipes'
})
export class FilterRecipesPipe implements PipeTransform {

  transform(recipes: Recipe[] | null, searchedValue: string): Recipe[] {
    if (!recipes) return [];
    else {
      return recipes.filter(recipe => {
        const isGood = this.checkIfRecipeNameIsGood(recipe.name, searchedValue) || this.checkIfRecipeIngradientsIsGood(recipe.ingradients, searchedValue);
        return isGood;
      })
    }
  }

  private checkIfRecipeNameIsGood(recipeName: string, searchedValue: string): boolean {
    return recipeName.toLowerCase().indexOf(searchedValue.toLowerCase()) >= 0;
  }

  private checkIfRecipeIngradientsIsGood(ingradients: Ingradient[], searchedValue: string): boolean {
    return ingradients.some(ingradient => {
      return ingradient.name.toLowerCase().indexOf(searchedValue.toLowerCase()) >= 0;
    })
  }
}
