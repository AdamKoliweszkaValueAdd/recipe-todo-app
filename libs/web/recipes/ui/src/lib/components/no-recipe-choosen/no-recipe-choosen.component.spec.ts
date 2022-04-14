import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoRecipeChoosenComponent } from './no-recipe-choosen.component';
import {MatCardModule} from "@angular/material/card";

describe('NoRecipeChoosenComponent', () => {
  let component: NoRecipeChoosenComponent;
  let fixture: ComponentFixture<NoRecipeChoosenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoRecipeChoosenComponent ],
      imports: [MatCardModule]
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
