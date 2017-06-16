import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//modulo http
import { HttpModule } from '@angular/http';

//servicios
import { CarritoService, ProductosService, UsuarioService} from "../providers/index.services";

//Pipes
import { ImagenPipe } from '../pipes/imagen';

//storage
import { IonicStorageModule } from '@ionic/storage';

//Paginas
import { CarritoPage,
         CategoriasPage,
         LoginPage,
         OrdenesDetallePage,
         OrdenesPage,
         PorCategoriasPage,
         ProductoPage,
         TabsPage,
         BusquedaPage } from "../pages/index.paginas";



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ImagenPipe,
    CarritoPage,
    CategoriasPage,
    LoginPage,
    OrdenesDetallePage,
    OrdenesPage,
    PorCategoriasPage,
    ProductoPage,
    TabsPage,
    BusquedaPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CarritoPage,
    CategoriasPage,
    LoginPage,
    OrdenesDetallePage,
    OrdenesPage,
    PorCategoriasPage,
    ProductoPage,
    TabsPage,
    BusquedaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CarritoService,
    ProductosService,
    UsuarioService
  ]
})
export class AppModule {}
