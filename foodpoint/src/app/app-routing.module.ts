import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'pesquisar',
    loadChildren: () => import('./pesquisar/pesquisar.module').then( m => m.PesquisarPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./pedidos/pedidos.module').then( m => m.PedidosPageModule)
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  },
  {
    path: 'categorias-burger',
    loadChildren: () => import('./categorias-burger/categorias-burger.module').then( m => m.CategoriasBurgerPageModule)
  },
  {
    path: 'categorias-pizza',
    loadChildren: () => import('./categorias-pizza/categorias-pizza.module').then( m => m.CategoriasPizzaPageModule)
  },
  {
    path: 'categorias-sorvete',
    loadChildren: () => import('./categorias-sorvete/categorias-sorvete.module').then( m => m.CategoriasSorvetePageModule)
  },
  {
    path: 'categorias-doce',
    loadChildren: () => import('./categorias-doce/categorias-doce.module').then( m => m.CategoriasDocePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
