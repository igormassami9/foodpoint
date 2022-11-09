import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriasSorvetePageRoutingModule } from './categorias-sorvete-routing.module';

import { CategoriasSorvetePage } from './categorias-sorvete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriasSorvetePageRoutingModule
  ],
  declarations: [CategoriasSorvetePage]
})
export class CategoriasSorvetePageModule {}
