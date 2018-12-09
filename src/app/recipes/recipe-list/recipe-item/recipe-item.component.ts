import { Component, Input } from '@angular/core';
import { RecipeService } from '../../recipe.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent {

  @Input() recipe;

  constructor(private recipeService: RecipeService) { }

  public selectRecipe() {
    this.recipeService.recipeSelected.emit(this.recipe)
  }

}
