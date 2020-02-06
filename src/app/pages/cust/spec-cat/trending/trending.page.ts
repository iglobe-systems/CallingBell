import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController,
  LoadingController} from '@ionic/angular';
  
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';

import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.page.html',
  styleUrls: ['./trending.page.scss'],
})
export class TrendingPage implements OnInit {
  trending:any;
  constructor(public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public authService: AuthService,
    public loadingCtrl: LoadingController,
    private alertService: AlertService,
    public router: Router) { }

  ngOnInit() {
    this.getServiceCat();
  }

  getServiceCat(){
    this.authService.getServiceCategory("91").subscribe(result=>{
      console.log(result);
      this.trending = result['data'].list;
    });
  }

  	async presentToast(message: any) {
    const toast = await this.toastCtrl.create({
   	  animated:true,
      message: message,
      duration: 2000,
      position: 'middle',
      mode:'ios',
      cssClass:"toastheight",
      color: 'darkblue',
      }).then(toast => {
        toast.present();
      });
  }

  goToIssue(service){
    let navigationExtras: NavigationExtras={
      state:{
        service:service
      }
    }
    this.router.navigate(['trending-issues'],navigationExtras);
    console.log(service);
  }

  back(){
    this.navCtrl.navigateBack('cust-home');
  }
}
