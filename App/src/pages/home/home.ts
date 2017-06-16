import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductosService } from "../../providers/productos";

//paginas
import { ProductoPage } from "../producto/producto";

//servicios
import { CarritoService, UsuarioService } from "../../providers/index.services";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  productoPage =ProductoPage;

  constructor( public navCtrl: NavController,
               private _ps:ProductosService,
               private _cs:CarritoService,
               private _us:UsuarioService) {
  }

  siguiente_pagina( infiniteScroll ){
    this._ps.cargar_todos()
        .then( ()=>{
          infiniteScroll.complete();
        });
  }

}
