import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardapioLanchePageRoutingModule } from './cardapio-lanche-routing.module';

import { CardapioLanchePage } from './cardapio-lanche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardapioLanchePageRoutingModule
  ],
  declarations: [CardapioLanchePage]
})
export class CardapioLanchePageModule {}
