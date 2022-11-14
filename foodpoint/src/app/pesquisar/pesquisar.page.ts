import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.page.html',
  styleUrls: ['./pesquisar.page.scss'],
})
export class PesquisarPage implements OnInit {
  categorias: any;

  constructor(
    private firestore: AngularFirestore
  ) { 
    this.categorias = this.firestore.collection("categorias").valueChanges()

  }

  ngOnInit() {
  }

}
