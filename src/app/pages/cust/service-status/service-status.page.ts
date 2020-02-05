import { Component, OnInit } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController,
  LoadingController
} from '@ionic/angular';

import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-service-status',
  templateUrl: './service-status.page.html',
  styleUrls: ['./service-status.page.scss'],
})
export class ServiceStatusPage implements OnInit {
  status:any;
  constructor(public authService: AuthService, 
              public alertService: AlertService, 
              public loadingCtrl: LoadingController, 
              public alertCtrl: AlertController, 
              public navCtrl: NavController,
              public popoverCtrl: PopoverController,
              private router: Router) { }

 
  ngOnInit() {
  	this.serviceStatus();
  }

 serviceStatus(){
    this.authService.serviceStatus().subscribe(data =>{
      console.log(data);
      this.status = data.message;
      if(data.response == true){
      	this.alertService.presentToast('You have the following support request');
      }else{
      	this.alertService.presentToast(data.message);
      }
    });
  }

  async serviceDesc(s){
     let navigationExtras: NavigationExtras={
      state:{
        status:s
      }
    }
    this.router.navigate(['service-desc'],navigationExtras);
    console.log(s);
  }
}
