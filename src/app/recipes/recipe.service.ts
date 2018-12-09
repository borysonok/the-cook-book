import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
          'A Test_01 Recipe',
          'This is simply a test_01',
          'https://elavegan.com/wp-content/uploads/2018/01/peanut-butter-noodles-vegan-gluten-free-healthy.jpg'),
        new Recipe(
          'A Test_02 Recipe',
          'This is simply a test_02',
          'https://vignette.wikia.nocookie.net/fallout/images/3/3f/Cooked_softshell_meat.png/revision/latest?cb=20151225082624'),
        new Recipe(
          'A Test_03 Recipe',
          'This is simply a test_03',
          'https://tindrumasiankitchen.com/wp-content/uploads/2017/08/lo-men.png')
      ];

    public getRecipes() { 
        return this.recipes.slice();
    }

 }