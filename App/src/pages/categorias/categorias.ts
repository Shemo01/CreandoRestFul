import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//servicios
import { ProductosService } from "../../providers/index.services";

//paginas
import { PorCategoriasPage } from "../index.paginas";

@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  porCategorias = PorCategoriasPage;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _ps:ProductosService) {
  }


}
