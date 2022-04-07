import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Ingradient, Recipe} from "@recipes/domain";
import {UniqueRecipeNameValidatorsService} from "@recipes/utils";

@Component({
  selector: 'recipes-recipe-form-content',
  templateUrl: './recipe-form-content.component.html',
  styleUrls: ['./recipe-form-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeFormContentComponent implements OnInit {

  @Input() set recipeToEdit(recipeToEdit: Recipe | undefined | null) {
    this.recipeId = recipeToEdit?._id;
    if (recipeToEdit) this.initFormByRecipeData(recipeToEdit);
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

  constructor(private uniqueRecipeNameValidatorsService: UniqueRecipeNameValidatorsService) {
    this.nameControl?.addAsyncValidators([this.uniqueRecipeNameValidatorsService.validate.bind(this.uniqueRecipeNameValidatorsService)]);
  }

  ngOnInit(): void {
  }

  getIngradientNameControl(ingradientId: string) {
    return this.recipeForm.get(this.getIngradientNameFormControlName(ingradientId));
  }

  getIngradientQuantityControl(ingradientId: string) {
    return this.recipeForm.get(this.getIngradientQuantityFormControlName(ingradientId));
  }

  onAddIngradient() {
    console.log(this.recipeForm.touched, this.recipeForm.untouched);
    const ingradientId = this.makeId();
    this.ingradientIds.push(ingradientId);
    this.recipeForm.setControl(this.getIngradientNameFormControlName(ingradientId), new FormControl('', [Validators.required]));
    this.recipeForm.setControl(this.getIngradientQuantityFormControlName(ingradientId), new FormControl('', [Validators.required]));
    console.log(this.recipeForm.touched, this.recipeForm.untouched);
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

  private makeId() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 16; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
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
      console.log(recipe);
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
