import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorias-burger',
  templateUrl: './categorias-burger.page.html',
  styleUrls: ['./categorias-burger.page.scss'],
})
export class CategoriasBurgerPage implements OnInit {
  lojas: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private firestore: AngularFirestore,
    private router: Router
  ) { 
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params[0])
      this.lojas = this.firestore.collection('lojas', ref => ref.where("idCategoria", "==", params[0])).valueChanges();
    })

  }
  ngOnInit() {
  }

  abreCardapio(loja) {
    console.log(loja)
    this.router.navigate(["cardapio-lanche"],{queryParams: [loja]})
  }
}
