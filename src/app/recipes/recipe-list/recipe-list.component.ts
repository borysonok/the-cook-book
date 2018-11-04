import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe(
      'A Test_01 Recipe',
      'This is simply a test_01',
      'https://elavegan.com/wp-content/uploads/2018/01/peanut-butter-noodles-vegan-gluten-free-healthy.jpg'),
    new Recipe(
      'A Test_02 Recipe',
      'This is simply a test_02',
      'https://elavegan.com/wp-content/uploads/2018/01/peanut-butter-noodles-vegan-gluten-free-healthy.jpg')
  ];

  constructor() {

  }

  ngOnInit() {
  }

}
