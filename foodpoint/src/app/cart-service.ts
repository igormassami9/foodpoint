import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class CartServiceProvider {

  cartItems: any[];

  constructor(private storage: Storage) {
    this.storage.get('cart').then((value) => {
      if(value == null) {
        this.cartItems = [];
      } else {
        this.cartItems = value;
      }
    });
  }

  getCart(): Promise<any> {
    return this.storage.get('cart');
  }

  addToCart(item: any): Promise<any> {
    this.cartItems.push(item);
    return this.storage.set('cart', this.cartItems);
  }

  clearCart(): Promise<any> {
    this.cartItems = [];
    return this.storage.remove('cart');
  }

}