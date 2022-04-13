import {FilterRecipesPipe} from './filter-recipes.pipe';
import {Recipe} from "@recipes/domain";

describe('FilterRecipesPipe', () => {

  const mockedRecipes = [{
    _id: 'test',
    description: 'Pyszna i smaczna pizza',
    name: 'Pizza Roma',
    preparationTimeInMinutes: 70,
    ingradients: [{
      _id: '1',
      name: 'Mleko',
      quantity: '1 litr'
    }]
  } as Recipe]

  it('create an instance', () => {
    const pipe = new FilterRecipesPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return empty array if have empty array as argument', () => {
    const pipe = new FilterRecipesPipe();
    expect(pipe.transform([], '').length).toBe(0);
  });

  it('should find by part name', () => {
    const pipe = new FilterRecipesPipe();
    expect(pipe.transform(mockedRecipes, 'Roma')).toEqual([mockedRecipes[0]]);
  });

  it('should find by all name', () => {
    const pipe = new FilterRecipesPipe();
    expect(pipe.transform(mockedRecipes, 'Pizza Roma')).toEqual([mockedRecipes[0]]);
  });

  it('should return all recipes when no search value', () => {
    const pipe = new FilterRecipesPipe();
    expect(pipe.transform(mockedRecipes, '')).toEqual(mockedRecipes);
  });

  it('should find by ingradient name', () => {
    const pipe = new FilterRecipesPipe();
    expect(pipe.transform(mockedRecipes, 'Mleko')).toEqual([mockedRecipes[0]]);
  });
});
