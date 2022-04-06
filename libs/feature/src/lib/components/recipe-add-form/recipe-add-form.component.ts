import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'recipes-recipe-add-form',
  templateUrl: './recipe-add-form.component.html',
  styleUrls: ['./recipe-add-form.component.scss']
})
export class RecipeAddFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onCancelForm(){
    this.router.navigateByUrl('');
  }
}
