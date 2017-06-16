import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

//servicios
import { CarritoService } from "../../providers/index.services";

@Component({
  selector: 'page-carrito',
  templateUrl: 'carrito.html',
})
export class CarritoPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viewCtrl:ViewController,
              private _cs:CarritoService) {
  }



}
