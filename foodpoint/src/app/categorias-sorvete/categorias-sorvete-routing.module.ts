import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasSorvetePage } from './categorias-sorvete.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriasSorvetePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriasSorvetePageRoutingModule {}
