import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
    listItemsName = ['Meat', 'Vegetables', 'Sweets', 'Healthy'];
  constructor() { }

  ngOnInit() {
  }

}
