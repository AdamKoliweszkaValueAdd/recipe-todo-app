import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'recipes-no-recipe-choosen',
  templateUrl: './no-recipe-choosen.component.html',
  styleUrls: ['./no-recipe-choosen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoRecipeChoosenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
