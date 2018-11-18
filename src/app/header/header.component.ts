import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    @Output() onShowRecipes = new EventEmitter();
    @Output() onShowShoppingList = new EventEmitter();
    
    displayRecipes() { 
        this.onShowRecipes.emit();
    }

    displayShoppingList() { 
        this.onShowShoppingList.emit();
    }
 }