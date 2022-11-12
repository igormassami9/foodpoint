import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardapioSorvetePage } from './cardapio-sorvete.page';

const routes: Routes = [
  {
    path: '',
    component: CardapioSorvetePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardapioSorvetePageRoutingModule {}
