import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrdenesDetallePage } from './ordenes-detalle';

@NgModule({
  declarations: [
    OrdenesDetallePage,
  ],
  imports: [
    IonicPageModule.forChild(OrdenesDetallePage),
  ],
  exports: [
    OrdenesDetallePage
  ]
})
export class OrdenesDetallePageModule {}
