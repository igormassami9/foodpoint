import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.page.html',
  styleUrls: ['./pesquisar.page.scss'],
})
export class PesquisarPage implements OnInit {
  categorias: any;

  constructor(
    private firestore: AngularFirestore,
    private router: Router
  ) { 
    this.categorias = this.firestore.collection("categorias").valueChanges()

  }

  ngOnInit() {
  }
  
  abreLoja(categoria) {
    console.log(categoria)
    this.router.navigate(["categorias-burger"],{queryParams: [categoria]})
  }
}
