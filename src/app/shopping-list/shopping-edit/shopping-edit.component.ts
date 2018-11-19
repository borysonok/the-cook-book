import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputName') inputName: ElementRef;
  @ViewChild('inputAmount') inputAmount: ElementRef;
  @Output() onAddNewItem = new EventEmitter;

  constructor() { }

  ngOnInit() { }

  public addNewItem() {
    // console.log("===== new item: ", name, amount);
    const name = this.inputName.nativeElement.value;
    const amount = this.inputAmount.nativeElement.value;
    const newItem = { name: name, amount: amount };
    this.onAddNewItem.emit(newItem);
  }

}
