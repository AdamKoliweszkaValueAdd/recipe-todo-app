import {Recipe} from "@recipes/domain";

export const fakedRecipes = [{
  _id: '1',
  name: 'Carbonara',
  preparationTimeInMinutes: 30,
  ingradients: [{name: 'Makaron', quantity: '500g'}, {name: 'Boczek', quantity: '50g'}, {name: 'Ser', quantity: '100g'}]
} as Recipe,
  {
    _id: '2',
    name: 'Pierogi z kapustą i grzybami',
    preparationTimeInMinutes: 190,
    ingradients: [{name: 'Kapusta', quantity: '50g'}, {name: 'Grzyby', quantity: '250g'}]
  } as Recipe,
  {
    _id: '3',
    name: 'Pizza',
    preparationTimeInMinutes: 28 * 60,
    ingradients: [{name: 'Drożdże', quantity: '100g'}, {name: 'Salami', quantity: '50g'}, {
      name: 'Szynka',
      quantity: '150g'
    }, {name: 'Ser', quantity: '50g'}]
  } as Recipe,
  {
    _id: '4',
    name: 'Naleśniki',
    preparationTimeInMinutes: 80,
    ingradients: [{name: 'Ciasto', quantity: '50l'}, {name: 'Nutella', quantity: '10ml'}]
  } as Recipe];
