import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item';
import { Cart } from '../cart';

@Component({
  selector: 'app-cardapio-lanche',
  templateUrl: './cardapio-lanche.page.html',
  styleUrls: ['./cardapio-lanche.page.scss'],
})
export class CardapioLanchePage implements OnInit {
  itens: any;
  loja: any;
  public cartitem: Item;
  itemsInCart: Object[] = []

  constructor(
    private activatedRoute: ActivatedRoute,
    public firestore: AngularFirestore,
    public cart: Cart

  ) { 
    this.activatedRoute.queryParams.subscribe(params => {
      this.itens = this.firestore.collection('itens', ref => ref.where("idLoja", "==", params[0])).valueChanges();
    })
  }

  ngOnInit() {
  }

  adicionaCarrinho(cartitem) {
    this.cart.itens.push(cartitem)
    console.log(this.cart.itens)
  }
}
