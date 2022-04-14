import {Injectable} from "@angular/core";
import {CanDeactivate} from "@angular/router";
import {RecipeFormContentComponent} from "../components/recipe-form-content/recipe-form-content.component";

@Injectable()
export class UnsavedRecipeFormGuard implements CanDeactivate<{ recipeFormContentComponent: RecipeFormContentComponent }> {
  canDeactivate(component: { recipeFormContentComponent: RecipeFormContentComponent }): boolean {
    console.log(component)
    if (component.recipeFormContentComponent.recipeForm.dirty) {
      return confirm('Czy jesteś pewny, że chcesz opuścić stronę przed zapisaniem zmian?');
    }
    return true;
  }
}
