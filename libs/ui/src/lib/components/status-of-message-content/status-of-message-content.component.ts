import {Component, Input, OnInit} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'recipes-status-of-message-content',
  templateUrl: './status-of-message-content.component.html',
  styleUrls: ['./status-of-message-content.component.scss']
})
export class StatusOfMessageContentComponent implements OnInit {
  @Input() set isInProgress(isInProgress: boolean) {
    //change, show some info
    this.lastStateIsInProgress = isInProgress;
  }

  @Input() isShowed: boolean | undefined;

  //

  @Input() recipeCreateError: HttpErrorResponse | null | undefined;
  @Input() recipeUpdateError: HttpErrorResponse | null | undefined;
  @Input() recipeRemoveError: HttpErrorResponse | null | undefined;

  lastStateIsInProgress = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
