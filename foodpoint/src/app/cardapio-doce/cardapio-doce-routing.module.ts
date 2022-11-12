import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardapioDocePage } from './cardapio-doce.page';

const routes: Routes = [
  {
    path: '',
    component: CardapioDocePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardapioDocePageRoutingModule {}
