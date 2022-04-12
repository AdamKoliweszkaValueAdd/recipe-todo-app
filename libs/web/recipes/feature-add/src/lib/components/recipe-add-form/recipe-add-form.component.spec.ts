import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RecipeAddFormComponent} from './recipe-add-form.component';
import {RouterTestingModule} from "@angular/router/testing";
import { RecipeFacade} from "@recipes/data-access";
import {Recipe} from "@recipes/domain";
import {Router} from "@angular/router";

describe('RecipeAddFormComponent', () => {
  let component: RecipeAddFormComponent;
  let fixture: ComponentFixture<RecipeAddFormComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeAddFormComponent],
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
    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('mat-card-title');
    expect(title.textContent).toContain("Dodawanie przepisu");
  });

  it('should call facade function when add click', () => {
    const mockRecipe = {
      _id: '',
      name: '',
      description: '',
    } as Recipe;
    jest.spyOn(component.recipeFacade, 'createRecipe');
    component.onAddRecipe(mockRecipe);
    fixture.detectChanges();
    expect(component.recipeFacade.createRecipe).toHaveBeenCalledWith({data: mockRecipe});
  });

  it('should not call facade function when cancel click', () => {
    jest.spyOn(component.recipeFacade, 'createRecipe');
    component.onCancelForm();
    fixture.detectChanges();
    expect(component.recipeFacade.createRecipe).toHaveBeenCalledTimes(0);
  });

  it('should route to main view', () => {
    const navigateSpy = jest.spyOn(router, 'navigateByUrl');
    component.onCancelForm();
    fixture.detectChanges();
    expect(navigateSpy).toHaveBeenCalledWith('');
  });
});
