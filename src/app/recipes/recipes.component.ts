import { Component } from "@angular/core";
import { RecipeService } from "./recipe.service";
import { Recipe } from "./recipe.model";
@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  providers: [RecipeService]
})
export class RecipesComponent {

  public selectedRecipe: Recipe = null;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }

}