import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

import { AlertController, Platform, ModalController } from "ionic-angular";

//storage plugin
import { Storage } from '@ionic/storage';

//usuario services
import { UsuarioService } from "./usuario";

//servicios URL
import { URL_SERVICIOS } from "../config/url.servicios";

//paginas de modalCtrl
import { LoginPage, CarritoPage } from "../pages/index.paginas";





@Injectable()
export class CarritoService {

  items:any[] = [];
  total_carrito:number = 0;
  ordenes:any[] =[];

  constructor(public http: Http,
              private alertCtrl:AlertController,
              private platform:Platform,
              private storage:Storage,
              private modalCtrl:ModalController,
              private _us:UsuarioService ) {
    console.log('Hello CarritoProvider Provider');

    this.cargar_storage();
    this.actualizar_total();
  }

  remove_item( idx:number ){

    this.items.splice( idx,1 );
    this.guaradar_storage();

  }

  realizar_pedido(){

    let data = new URLSearchParams();

    let codigos:string[]=[];

    for( let item of this.items ){
      codigos.push( item.codigo )
    }
    //console.log( codigos );
    data.append( "items", codigos.join(",") );
    //console.log( codigos.join(",") ) ;

    let url = `${ URL_SERVICIOS }/pedidos/realizar_orden/${ this._us.token}/${ this._us.id_usuario}`;

    this.http.post( url, data )
             .subscribe( resp => {

               let respuesta = resp.json();

               if( respuesta.error ){
                 //error mostramos
                 this.alertCtrl.create({
                   title:"Error en la Orden!!",
                   subTitle: respuesta.mensaje,
                   buttons:["OK"]
                 }).present();
               }else{
                 //todo ok
                 this.items = [];
                 this.alertCtrl.create({
                   title:"Orden Realizada !!",
                   subTitle: "Nos pondremos en contacto proximamente..",
                   buttons:["OK"]
                 }).present();
               }

             })

  }

  ver_carrito(){

    let modal:any;

    if( this._us.token ){
      //mostrar pagina del CarritoProvider
      modal = this.modalCtrl.create( CarritoPage );
    }else{
      //mostrar login
      modal = this.modalCtrl.create( LoginPage );
    }

    modal.present();

    modal.onDidDismiss( (abrirCarrito:boolean)=>{

      console.log( abrirCarrito );
          if( abrirCarrito ){
            this.modalCtrl.create( CarritoPage ).present();
          }
    })

  }

  agregar_carrito( item_parametro :any ){

    for( let item of this.items ){

      if( item.codigo == item_parametro.codigo ){
        //son iguales
        this.alertCtrl.create({
          title:"Item existente",
          subTitle: item_parametro.producto + ", ya se encuentra en su carrito ",
          buttons:["OK"]
        }).present();

        return;
      }

    }

    this.items.push( item_parametro );
    this.actualizar_total();
    this.guaradar_storage();
  }

  actualizar_total(){
    this.total_carrito = 0;

    for( let item of this.items ){
      this.total_carrito += Number( item.precio_compra );
    }

  }



  private guaradar_storage(){

    if( this.platform.is("cordova") ){
      //dispositivo
      this.storage.set( 'items', this.items );

    }else{
      //computador
      localStorage.setItem( "items", JSON.stringify( this.items ) );
    }

  }


  cargar_storage(){

    let promesa = new Promise ( ( resolve,reject )=>{

      if( this.platform.is("cordova") ){
        //dispositivo
        this.storage.ready()
                    .then( ()=>{

                      this.storage.get( "items")
                          .then( items=>{

                            if( items ){
                              this.items = items;
                            }
                            resolve();
                          })

                    });

      }else{
        //computador
        if( localStorage.getItem("items") ){
          //existe items en el localStorage
          this.items = JSON.parse( localStorage.getItem("items") );
        }
        resolve();
      }

    });

    return promesa;
  }

  cargar_ordenes(){

    let url = `${ URL_SERVICIOS}/pedidos/obtener_pedidos/${ this._us.token }/${ this._us.id_usuario }`;

    this.http.get( url )
              .map( resp => resp.json() )
              .subscribe( data =>{

                if( data.error ){
                  //manejar error
                  this.alertCtrl.create({
                    title:"Error!!",
                    subTitle: data.mensaje,
                    buttons:["OK"]
                  }).present();
                }else{
                  this.ordenes = data.ordenes;
                }

              })


  }

  borrar_orden( orden_id:string ){

    let url = `${ URL_SERVICIOS }/pedidos/borrar_pedido/${ this._us.token }/${ this._us.id_usuario }/${ orden_id }`;

    return this.http.delete( url )
               .map( resp => resp.json() );

  }

}
