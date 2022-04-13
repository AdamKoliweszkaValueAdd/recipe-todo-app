import {Component} from '@angular/core';
import {MessageStatusDisplayerService} from "@recipes/data-access";

@Component({
  selector: 'recipes-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent {

  constructor(private messageStatusDisplayerService: MessageStatusDisplayerService) {
  }

}
