import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardapioSorvetePageRoutingModule } from './cardapio-sorvete-routing.module';

import { CardapioSorvetePage } from './cardapio-sorvete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardapioSorvetePageRoutingModule
  ],
  declarations: [CardapioSorvetePage]
})
export class CardapioSorvetePageModule {}
