import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {

    private ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Pineapple', 15),
        new Ingredient('Almonds', 300),
        new Ingredient('Sugar', 50),
        new Ingredient('Eggs', 12)
    ];

    public getIngredients() {
        return this.ingredients.slice();
    }

    public addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

}