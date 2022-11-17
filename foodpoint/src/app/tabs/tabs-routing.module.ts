import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'pedidos',
        loadChildren: () => import('../pedidos/pedidos.module').then(m => m.PedidosPageModule)
      },
      {
        path: 'pesquisar',
        loadChildren: () => import('../pesquisar/pesquisar.module').then(m => m.PesquisarPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'cardapio-lanche',
        loadChildren: () => import('../cardapio-lanche/cardapio-lanche.module').then(m => m.CardapioLanchePageModule)
      },
      {
        path: 'categorias-burger',
        loadChildren: () => import('../categorias-burger/categorias-burger.module').then(m => m.CategoriasBurgerPageModule)
      },
      {
        path: 'carrinho',
        loadChildren: () => import('../carrinho/carrinho.module').then(m => m.CarrinhoPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
