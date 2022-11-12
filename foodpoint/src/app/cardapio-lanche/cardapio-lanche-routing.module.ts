import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardapioLanchePage } from './cardapio-lanche.page';

const routes: Routes = [
  {
    path: '',
    component: CardapioLanchePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardapioLanchePageRoutingModule {}
