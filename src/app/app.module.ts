import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router,RouteReuseStrategy,Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Components
import { SupportComponent } from './components/support/support.component';
import { SupportcallComponent } from './components/supportcall/supportcall.component';

import { IonicStorageModule } from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './services/env.service';

import { FormBuilder, FormGroup, Validators,FormsModule, ReactiveFormsModule } from '@angular/forms';
// Camera 
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileTransfer,FileTransferObject} from '@ionic-native/file-transfer/ngx';

//geo location
import { Geolocation } from '@ionic-native/geolocation/ngx';
//anime
import anime from 'animejs/lib/anime.es.js';

import { ImageModalPageModule } from './pages/cust/image-modal/image-modal.module';

import { PapaParseModule } from 'ngx-papaparse';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

import { LottieSplashScreen } from '@ionic-native/lottie-splash-screen/ngx';
import { CartPageModule } from './pages/cust/cart/cart.module';

//image picker
import { ImagePicker } from '@ionic-native/image-picker/ngx';

@NgModule({
  declarations: [AppComponent, SupportComponent, SupportcallComponent],
  entryComponents: [SupportComponent, SupportcallComponent],
  imports: [
  BrowserModule, 
  // BrowserAnimationsModule,
  IonicModule.forRoot(), 
  AppRoutingModule,
  HttpClientModule,
  IonicStorageModule.forRoot(),
  ReactiveFormsModule,
  ImageModalPageModule,
  PapaParseModule,
  CartPageModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NativeStorage,
    Camera,
    File,
    FileTransfer,
    FileTransferObject,
    WebView,
    Geolocation,
    FilePath,
    EnvService,
    SocialSharing,
    LottieSplashScreen,
    ImagePicker,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
