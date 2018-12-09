import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputName') inputName: ElementRef;
  @ViewChild('inputAmount') inputAmount: ElementRef;
 
  constructor(private slService: ShoppingListService) { }

  ngOnInit() { }

  public addNewItem() {
    const name = this.inputName.nativeElement.value;
    const amount = this.inputAmount.nativeElement.value;
    const newItem = { name: name, amount: amount };
    this.slService.addIngredient(newItem);
  }

}
