import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasBurgerPage } from './categorias-burger.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriasBurgerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriasBurgerPageRoutingModule {}
