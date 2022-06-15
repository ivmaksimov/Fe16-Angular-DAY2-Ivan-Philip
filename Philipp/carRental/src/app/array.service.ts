import { Injectable } from '@angular/core';
import { Vehicle, vehicles } from './classes/myclasses';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {
  private items: Vehicle[] = vehicles

  constructor() { }
  
  addToArray(product: Vehicle) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearArray() {
    this.items = [];
    return this.items;
  }
}