import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasPizzaPage } from './categorias-pizza.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriasPizzaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriasPizzaPageRoutingModule {}
