import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardapioPizzaPageRoutingModule } from './cardapio-pizza-routing.module';

import { CardapioPizzaPage } from './cardapio-pizza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardapioPizzaPageRoutingModule
  ],
  declarations: [CardapioPizzaPage]
})
export class CardapioPizzaPageModule {}
