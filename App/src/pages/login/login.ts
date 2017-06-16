import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

//servicios
import { UsuarioService } from "../../providers/index.services";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  correo:string ="";
  contrasena:string = "";



  constructor(public navCtrl: NavController,
              private viewCtrl:ViewController,
              private _us:UsuarioService,
              public navParams: NavParams) {


  }

  ingresar(){
    this._us.ingresar( this.correo, this.contrasena )
            .subscribe( ()=>{

            if( this._us.activo() ){
              this.viewCtrl.dismiss(true);
            }

            })
  }

}
