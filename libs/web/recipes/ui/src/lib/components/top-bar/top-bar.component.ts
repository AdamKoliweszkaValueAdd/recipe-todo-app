import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MessageDialogComponent} from "@recipes/web/recipes/dialogs-ui";

@Component({
  selector: 'recipes-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBarComponent{
  @Input() appName = 'Recipe App';
  @Input() icon = 'home';

  constructor( public dialog: MatDialog) {
  }

  onShowAuthor() {
    const message = 'Autorem aplikacji jest Adam Koliweszka';

    const dialogData = {title: "Autor aplikacji", message: message};

    this.dialog.open(MessageDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

  }
}
