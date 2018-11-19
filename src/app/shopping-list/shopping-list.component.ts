import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Pineapple', 15),
    new Ingredient('Almonds', 300),
    new Ingredient('Sugar', 50),
    new Ingredient('Eggs', 12)
  ];

  constructor() { }

  ngOnInit() { }

  public addItem(item) {
    console.log("===== new item: ", item);
    const ing = new Ingredient(item.name, item.amount);
    this.ingredients.push(ing);
  }

}
