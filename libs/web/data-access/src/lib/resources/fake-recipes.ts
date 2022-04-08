import {Recipe} from "@recipes/domain";

export const fakedRecipes = [{
  _id: '1',
  name: 'Carbonara',
  description: "Makaronowy opis",
  preparationTimeInMinutes: 30,
  ingradients: [{_id: '0', name: 'Makaron', quantity: '500g'}, {_id: '1', name: 'Boczek', quantity: '50g'}, {
    _id: '2',
    name: 'Ser',
    quantity: '100g'
  }]
} as Recipe,
  {
    _id: '2',
    name: 'Pierogi z kapustą i grzybami',
    description: "opis grzybów\n i takie tam",
    preparationTimeInMinutes: 190,
    ingradients: [{_id: '1', name: 'Kapusta', quantity: '50g'}, {_id: '1', name: 'Grzyby', quantity: '250g'}]
  } as Recipe,
  {
    _id: '3',
    name: 'Pizza',
    description: "Losowy opis pizzy",
    preparationTimeInMinutes: 28 * 60,
    ingradients: [{_id: '1', name: 'Drożdże', quantity: '100g'}, {_id: '2', name: 'Salami', quantity: '50g'}, {
      _id: '3',
      name: 'Szynka',
      quantity: '150g'
    }, {name: 'Ser', quantity: '50g'}]
  } as Recipe,
  {
    _id: '4',
    name: 'Naleśniki',
    description: "Opis naleśników z serem i nutellą\n z nowej lini teraz",
    preparationTimeInMinutes: 80,
    ingradients: [{_id: '1', name: 'Ciasto', quantity: '50l'}, {_id: '2', name: 'Nutella', quantity: '10ml'}]
  } as Recipe];
