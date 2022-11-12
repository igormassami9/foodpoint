import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardapioDocePageRoutingModule } from './cardapio-doce-routing.module';

import { CardapioDocePage } from './cardapio-doce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardapioDocePageRoutingModule
  ],
  declarations: [CardapioDocePage]
})
export class CardapioDocePageModule {}
