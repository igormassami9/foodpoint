import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item';
import { Cart } from '../cart';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

  constructor(
    public cart: Cart

    ) {
      console.log(cart.itens)
    }

  ngOnInit() {
  }

}
