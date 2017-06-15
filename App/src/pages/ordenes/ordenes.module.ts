import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrdenesPage } from './ordenes';

@NgModule({
  declarations: [
    OrdenesPage,
  ],
  imports: [
    IonicPageModule.forChild(OrdenesPage),
  ],
  exports: [
    OrdenesPage
  ]
})
export class OrdenesPageModule {}
