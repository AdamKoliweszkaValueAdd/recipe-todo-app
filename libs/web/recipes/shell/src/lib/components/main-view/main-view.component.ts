import {Component, OnInit} from '@angular/core';
import {MessageStatusDisplayerService} from "@recipes/utils";

@Component({
  selector: 'recipes-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor(private messageStatusDisplayerService: MessageStatusDisplayerService) {
  }

  ngOnInit(): void {
  }

}
