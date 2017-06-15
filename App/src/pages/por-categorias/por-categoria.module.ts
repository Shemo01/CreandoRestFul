import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PorCategoriaPage } from './por-categoria';

@NgModule({
  declarations: [
    PorCategoriaPage,
  ],
  imports: [
    IonicPageModule.forChild(PorCategoriaPage),
  ],
  exports: [
    PorCategoriaPage
  ]
})
export class PorCategoriaPageModule {}
