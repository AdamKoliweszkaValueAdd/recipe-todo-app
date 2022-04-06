import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Recipe} from "@recipes/domain";

@Component({
  selector: 'recipes-recipe-form-content',
  templateUrl: './recipe-form-content.component.html',
  styleUrls: ['./recipe-form-content.component.scss']
})
export class RecipeFormContentComponent implements OnInit {

  @Input()recipeToEdit: Recipe | undefined;
  @Output()saveRecipe = new EventEmitter<Recipe>();
  @Output()cancelForm = new EventEmitter<void>();

  ingradientIds: string[] = [];

  recipeForm = new FormGroup({
    name: new FormControl('',
      [Validators.required,Validators.minLength(3),Validators.maxLength(80)]),
    preparationTime: new FormControl(0, [Validators.required, Validators.min(0)]),
    description: new FormControl('',[Validators.required,Validators.minLength(15),Validators.maxLength(255)]),
  });

  get nameControl(){
    return this.recipeForm.get('name');
  }

  get preparationTimeControl(){
    return this.recipeForm.get('preparationTime');
  }

  get descriptionControl(){
    return this.recipeForm.get('description');
  }

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

  getIngradientNameControl(ingradientId: string){
    return this.recipeForm.get(this.getIngradientNameFormControlName(ingradientId));
  }

  getIngradientQuantityControl(ingradientId: string){
    return this.recipeForm.get(this.getIngradientQuantityFormControlName(ingradientId));
  }

  onAddIngradient(){
    const ingradientId = this.makeIdOfIngradient();
    this.ingradientIds.push(ingradientId);
    this.recipeForm.setControl(this.getIngradientNameFormControlName(ingradientId), new FormControl('',[Validators.required]));
    this.recipeForm.setControl(this.getIngradientQuantityFormControlName(ingradientId), new FormControl('',[Validators.required]));
  }

  onRemoveIngradient(ingradientId: string){
    this.recipeForm.removeControl(this.getIngradientNameFormControlName(ingradientId));
    this.recipeForm.removeControl(this.getIngradientQuantityFormControlName(ingradientId));
    this.ingradientIds = this.ingradientIds.filter(id => id !== ingradientId);
  }

  onCancelForm(){
    this.cancelForm.emit();
  }

  private makeIdOfIngradient(){
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < 16; i++ ) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }

  private getIngradientNameFormControlName(ingradientId: string){
    return 'ingradient_' + ingradientId + '_name';
  }

  private getIngradientQuantityFormControlName(ingradientId: string){
    return 'ingradient_' + ingradientId + '_quantity';
  }
}
