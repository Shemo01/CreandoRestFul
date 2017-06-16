import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//servicios
import { CarritoService } from "../../providers/index.services";

//paginas
import { OrdenesDetallePage } from "../index.paginas";


@Component({
  selector: 'page-ordenes',
  templateUrl: 'ordenes.html',
})
export class OrdenesPage {

  ordenesDetalle= OrdenesDetallePage;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _cs:CarritoService) {
  }

  ionViewWillEnter() {
    console.log("cargando ordenes");
    this._cs.cargar_ordenes();
  }

}
