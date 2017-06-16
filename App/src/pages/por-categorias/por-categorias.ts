import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//servoce
import { ProductosService } from "../../providers/index.services";

//paginas
import { ProductoPage } from "../producto/producto";

@Component({
  selector: 'page-por-categorias',
  templateUrl: 'por-categorias.html',
})
export class PorCategoriasPage {

productoPage = ProductoPage;

categoria:any = {};


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _ps:ProductosService) {

      // console.log( this.navParams.get( "categoria") );

      this.categoria =  this.navParams.get("categoria");

      this._ps.cargar_por_categoria( this.categoria.id );
  }
}
