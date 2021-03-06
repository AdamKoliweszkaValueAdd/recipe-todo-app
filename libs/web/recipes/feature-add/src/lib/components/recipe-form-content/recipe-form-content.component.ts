import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Ingradient, Recipe} from "@recipes/domain";
import {IdentyficationNumberGeneratorService} from "@recipes/utils";
import {UniqueRecipeNameValidatorsService} from "@recipes/data-access";


@Component({
  selector: 'recipes-recipe-form-content',
  templateUrl: './recipe-form-content.component.html',
  styleUrls: ['./recipe-form-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeFormContentComponent {

  @Input() set recipeToEdit(recipeToEdit: Recipe | undefined | null) {
    this.recipeId = recipeToEdit?._id;
    if (recipeToEdit) {
      this.initFormByRecipeData(recipeToEdit);
      this.nameControl?.clearAsyncValidators();
      this.nameControl?.addAsyncValidators([this.uniqueRecipeNameValidatorsService.createUniqueNameValidator(recipeToEdit._id)]);
      this.nameControl?.updateValueAndValidity();
    } else {
      this.nameControl?.clearAsyncValidators();
      this.nameControl?.addAsyncValidators([this.uniqueRecipeNameValidatorsService.createUniqueNameValidator(null)]);
      this.nameControl?.updateValueAndValidity();
    }
  }

  @Output() saveRecipe = new EventEmitter<Recipe>();
  @Output() cancelForm = new EventEmitter<void>();

  recipeId: string | undefined;
  ingradientIds: string[] = [];

  recipeForm = new FormGroup({
    name: new FormControl('',
      [Validators.required, Validators.minLength(3), Validators.maxLength(80)]),
    preparationTime: new FormControl(0, [Validators.required, Validators.min(0)]),
    description: new FormControl('', [Validators.required, Validators.minLength(15), Validators.maxLength(255)]),
  });

  get nameControl() {
    return this.recipeForm.get('name');
  }

  get preparationTimeControl() {
    return this.recipeForm.get('preparationTime');
  }

  get descriptionControl() {
    return this.recipeForm.get('description');
  }

  constructor(private uniqueRecipeNameValidatorsService: UniqueRecipeNameValidatorsService,
              private identyficationNumberGeneratorService: IdentyficationNumberGeneratorService) {
    this.nameControl?.addAsyncValidators([this.uniqueRecipeNameValidatorsService.createUniqueNameValidator(null)]);
  }

  getIngradientNameControl(ingradientId: string) {
    return this.recipeForm.get(this.getIngradientNameFormControlName(ingradientId));
  }

  getIngradientQuantityControl(ingradientId: string) {
    return this.recipeForm.get(this.getIngradientQuantityFormControlName(ingradientId));
  }

  onAddIngradient() {
    const ingradientId = this.identyficationNumberGeneratorService.generateId();
    this.ingradientIds.push(ingradientId);
    this.recipeForm.setControl(this.getIngradientNameFormControlName(ingradientId), new FormControl('', [Validators.required]));
    this.recipeForm.setControl(this.getIngradientQuantityFormControlName(ingradientId), new FormControl('', [Validators.required]));
    this.recipeForm.markAsUntouched();
  }

  onRemoveIngradient(ingradientId: string) {
    this.recipeForm.removeControl(this.getIngradientNameFormControlName(ingradientId));
    this.recipeForm.removeControl(this.getIngradientQuantityFormControlName(ingradientId));
    this.ingradientIds = this.ingradientIds.filter(id => id !== ingradientId);
  }

  onCancelForm() {
    this.cancelForm.emit();
  }


  private getIngradientNameFormControlName(ingradientId: string) {
    return 'ingradient_' + ingradientId + '_name';
  }

  private getIngradientQuantityFormControlName(ingradientId: string) {
    return 'ingradient_' + ingradientId + '_quantity';
  }

  initFormByRecipeData(recipe: Recipe) {
    this.nameControl?.setValue(recipe.name);
    this.preparationTimeControl?.setValue(recipe.preparationTimeInMinutes);
    this.descriptionControl?.setValue(recipe.description);
    this.resetIngradientForm();
    this.initIngredientFormByRecipeData(recipe);
  }

  private initIngredientFormByRecipeData(recipe: Recipe) {
    recipe.ingradients.forEach(ingradient => {
      const ingradientId = ingradient._id;
      if (ingradientId) {
        this.ingradientIds.push(ingradientId);
        this.recipeForm.setControl(this.getIngradientNameFormControlName(ingradientId), new FormControl('', [Validators.required]));
        this.recipeForm.get(this.getIngradientNameFormControlName(ingradientId))?.setValue(ingradient.name);
        this.recipeForm.setControl(this.getIngradientQuantityFormControlName(ingradientId), new FormControl('', [Validators.required]));
        this.recipeForm.get(this.getIngradientQuantityFormControlName(ingradientId))?.setValue(ingradient.quantity);
      }
    })
  }

  resetIngradientForm() {
    this.ingradientIds.forEach(ingradientId => {
      this.recipeForm.removeControl(this.getIngradientNameFormControlName(ingradientId));
      this.recipeForm.removeControl(this.getIngradientQuantityFormControlName(ingradientId));
    })
    this.ingradientIds = [];
  }

  submitForm() {
    if (this.recipeForm.valid && this.ingradientIds.length >= 2) {
      const recipe = this.getRecipeData();
      this.recipeForm.markAsPristine();
      this.saveRecipe.emit(recipe);
    } else console.log('nie');
  }

  private getRecipeData(): Recipe {
    const ingradients = this.ingradientIds.map(ingradientId => {
      return {
        _id: ingradientId,
        name: this.getIngradientNameControl(ingradientId)?.value,
        quantity: this.getIngradientQuantityControl(ingradientId)?.value,
      } as Ingradient
    })
    const recipe = {
      _id: this.recipeId ? this.recipeId : undefined,
      name: this.nameControl?.value,
      description: this.descriptionControl?.value,
      preparationTimeInMinutes: this.preparationTimeControl?.value,
      ingradients: ingradients,
    } as Recipe;
    return recipe;
  }
}
