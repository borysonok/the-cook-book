import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-recipe-detail', 
    templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent { 

    @Input() public recipe = null;

}