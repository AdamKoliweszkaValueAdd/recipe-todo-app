import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { Observable } from 'rxjs';
import { RecipeFacade } from './recipe.facade';
import * as fromRecipeActions from './recipe.actions';

describe('RecipeFacade', () => {
  let actions: Observable<any>;
  let facade: RecipeFacade;
  let store: MockStore;

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [],
        providers: [RecipeFacade, provideMockStore(), provideMockActions(() => actions)]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), CustomFeatureModule]
      })
      class RootModule {}

      TestBed.configureTestingModule({ imports: [RootModule] });
      facade = TestBed.inject(RecipeFacade);
      store = TestBed.inject(MockStore);
      jest.spyOn(store, 'dispatch');
    });

    describe('#getRecipe', () => {
      test('should dispatch fromRecipeActions.getRecipe action', () => {
        const payload = {} as any;
        const action = fromRecipeActions.getRecipe({ payload });

        facade.getRecipe(payload);
        expect(store.dispatch).toHaveBeenCalledWith(action);
      });
    });

    describe('#getRecipeCollection', () => {
      test('should dispatch fromRecipeActions.getRecipeCollection action', () => {
        const payload = {} as any;
        const action = fromRecipeActions.getRecipeCollection({ payload });

        facade.getRecipeCollection(payload);
        expect(store.dispatch).toHaveBeenCalledWith(action);
      });
    });

    describe('#createRecipe', () => {
      test('should dispatch fromRecipeActions.createRecipe action', () => {
        const payload = {} as any;
        const action = fromRecipeActions.createRecipe({ payload });

        facade.createRecipe(payload);
        expect(store.dispatch).toHaveBeenCalledWith(action);
      });
    });

    describe('#updateRecipe', () => {
      test('should dispatch fromRecipeActions.updateRecipe action', () => {
        const payload = {} as any;
        const action = fromRecipeActions.updateRecipe({ payload });

        facade.updateRecipe(payload);
        expect(store.dispatch).toHaveBeenCalledWith(action);
      });
    });

    describe('#removeRecipe', () => {
      test('should dispatch fromRecipeActions.removeRecipe action', () => {
        const payload = {} as any;
        const action = fromRecipeActions.removeRecipe({ payload });

        facade.removeRecipe(payload);
        expect(store.dispatch).toHaveBeenCalledWith(action);
      });
    });
  });
});
