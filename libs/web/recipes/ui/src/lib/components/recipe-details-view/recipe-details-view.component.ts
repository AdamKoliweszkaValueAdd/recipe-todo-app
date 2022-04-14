import {ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {Recipe} from "@recipes/domain";

@Component({
  selector: 'recipes-recipe-details-view',
  templateUrl: './recipe-details-view.component.html',
  styleUrls: ['./recipe-details-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeDetailsViewComponent {

  @Input() recipe: Recipe | undefined | null;

}
