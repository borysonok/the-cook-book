import { Component } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {

  public showShoppingList = false;
  public showRecipes = true;

  public displayShoppingList() {
    this.showShoppingList = true;
    this.showRecipes = false;
  }

  public displayRecipes() {
    this.showShoppingList = false;
    this.showRecipes = true;
  }
}