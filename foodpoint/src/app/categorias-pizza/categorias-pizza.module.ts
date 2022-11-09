import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriasPizzaPageRoutingModule } from './categorias-pizza-routing.module';

import { CategoriasPizzaPage } from './categorias-pizza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriasPizzaPageRoutingModule
  ],
  declarations: [CategoriasPizzaPage]
})
export class CategoriasPizzaPageModule {}
