import { Component } from "@angular/core";
@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html"
})
export class RecipesComponent {

  public selectedRecipe = null;

  public showSelectedRecipeDetails(recipe) {
    this.selectedRecipe = recipe;
  }

}