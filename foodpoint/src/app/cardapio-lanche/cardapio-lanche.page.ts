import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cardapio-lanche',
  templateUrl: './cardapio-lanche.page.html',
  styleUrls: ['./cardapio-lanche.page.scss'],
})
export class CardapioLanchePage implements OnInit {
  itens: any;
  loja: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public firestore: AngularFirestore
  ) { 
    this.activatedRoute.queryParams.subscribe(params => {
      this.itens = this.firestore.collection('itens', ref => ref.where("idLoja", "==", params[0])).valueChanges();
    })
  }

  ngOnInit() {
  }

}
