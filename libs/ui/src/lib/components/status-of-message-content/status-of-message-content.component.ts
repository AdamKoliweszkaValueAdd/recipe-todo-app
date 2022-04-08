import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'recipes-status-of-message-content',
  templateUrl: './status-of-message-content.component.html',
  styleUrls: ['./status-of-message-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusOfMessageContentComponent implements OnInit {

  @Input() isShowedCreatedStatus: boolean | undefined;
  @Input() isShowedUpdatedStatus: boolean | undefined;
  @Input() isShowedRemovedStatus: boolean | undefined;

  @Input() recipeCreateError: HttpErrorResponse | null | undefined;
  @Input() recipeUpdateError: HttpErrorResponse | null | undefined;
  @Input() recipeRemoveError: HttpErrorResponse | null | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
