import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'recipes-recipe-edit-form',
  templateUrl: './recipe-edit-form.component.html',
  styleUrls: ['./recipe-edit-form.component.scss']
})
export class RecipeEditFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onCancelForm(){
    this.router.navigateByUrl('');
  }

}
