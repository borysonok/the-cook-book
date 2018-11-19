import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() onAddNewItem = new EventEmitter;
  constructor() { }

  ngOnInit() { }

  public addNewItem(name, amount) {
    console.log("===== new item: ", name, amount);
    const newItem = { name: name, amount: amount };
    this.onAddNewItem.emit(newItem);
  }

}
