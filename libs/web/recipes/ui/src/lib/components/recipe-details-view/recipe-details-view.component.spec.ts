import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailsViewComponent } from './recipe-details-view.component';

describe('RecipeDetailsViewComponent', () => {
  let component: RecipeDetailsViewComponent;
  let fixture: ComponentFixture<RecipeDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeDetailsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
