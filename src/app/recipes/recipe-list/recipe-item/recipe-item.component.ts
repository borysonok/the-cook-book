import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {

  @Output() public onSelectRecipe = new EventEmitter();
  @Input() recipe;

  public selectRecipe() {
    console.log("inside recipe-item: ", this.recipe);
    this.onSelectRecipe.emit(this.recipe); 
  }

  constructor() { }

  ngOnInit() { }

}
