import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MessageDialogComponent} from "../message-dialog/message-dialog.component";

@Component({
  selector: 'recipes-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBarComponent implements OnInit {
  @Input() appName = 'Recipe App';
  @Input() icon = 'home';

  constructor( public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  onShowAuthor() {
    const message = 'Autorem aplikacji jest Adam Koliweszka';

    const dialogData = {title: "Autor aplikacji", message: message};

    const dialogRef = this.dialog.open(MessageDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

  }
}
