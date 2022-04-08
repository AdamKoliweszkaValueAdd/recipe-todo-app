import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoRecipeChoosenComponent } from './no-recipe-choosen.component';

describe('NoRecipeChoosenComponent', () => {
  let component: NoRecipeChoosenComponent;
  let fixture: ComponentFixture<NoRecipeChoosenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoRecipeChoosenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoRecipeChoosenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
