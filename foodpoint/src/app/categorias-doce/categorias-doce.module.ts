import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriasDocePageRoutingModule } from './categorias-doce-routing.module';

import { CategoriasDocePage } from './categorias-doce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriasDocePageRoutingModule
  ],
  declarations: [CategoriasDocePage]
})
export class CategoriasDocePageModule {}
