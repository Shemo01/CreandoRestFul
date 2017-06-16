import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

//servicios
import { CarritoService } from "../../providers/index.services";

@Component({
  selector: 'page-ordenes-detalle',
  templateUrl: 'ordenes-detalle.html',
})
export class OrdenesDetallePage {

  orden:any = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _cs:CarritoService,
              private alertCtrl:AlertController) {

      this.orden = this.navParams.get("orden");
  }

  borrar_orden( orden_id:string ){

   this._cs.borrar_orden(orden_id)
       .subscribe( data =>{

         if( data.error ){
           //error mostramos
           this.alertCtrl.create({
             title:"Error en la Orden!!",
             subTitle: data.mensaje,
             buttons:["OK"]
           }).present();
         }else{
           //todo ok
           this.navCtrl.pop();
         }

       });
  }

}
