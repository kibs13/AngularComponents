import { Component } from '@angular/core';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent {
  newItem: string = '';                // Holds the new item to be added
  shoppingList: string[] = [];          // List of shopping items

  // Method to add an item to the shopping list
  addItem(): void {
    if (this.newItem.trim()) {
      this.shoppingList.push(this.newItem);
      this.newItem = '';  // Clear the input field after adding
    }
  }

  // Method to remove an item from the shopping list by index
  removeItem(index: number): void {
    this.shoppingList.splice(index, 1);  // Remove item at the given index
  }
}
