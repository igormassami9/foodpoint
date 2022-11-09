import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriasBurgerPageRoutingModule } from './categorias-burger-routing.module';

import { CategoriasBurgerPage } from './categorias-burger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriasBurgerPageRoutingModule
  ],
  declarations: [CategoriasBurgerPage]
})
export class CategoriasBurgerPageModule {}
