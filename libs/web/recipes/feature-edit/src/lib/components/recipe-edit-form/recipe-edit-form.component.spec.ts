import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RecipeEditFormComponent} from './recipe-edit-form.component';
import {RecipeFacade} from "@recipes/data-access";
import {Recipe} from "@recipes/domain";
import {RouterTestingModule} from "@angular/router/testing";

describe('RecipeEditFormComponent', () => {
  let component: RecipeEditFormComponent;
  let fixture: ComponentFixture<RecipeEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeEditFormComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: RecipeFacade, useValue: {
            createRecipe: (recipe: Recipe) => {
              console.log(recipe);
            }
          }
        },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
