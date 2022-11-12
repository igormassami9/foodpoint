import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardapioPizzaPage } from './cardapio-pizza.page';

const routes: Routes = [
  {
    path: '',
    component: CardapioPizzaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardapioPizzaPageRoutingModule {}
