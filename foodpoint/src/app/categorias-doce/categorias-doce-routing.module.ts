import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasDocePage } from './categorias-doce.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriasDocePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriasDocePageRoutingModule {}
