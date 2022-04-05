import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'recipes-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  @Input() appName = 'Recipe App';
  @Input() icon = 'home';

  constructor() {
  }

  ngOnInit(): void {
  }

}
