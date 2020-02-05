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
  selector: 'app-other-services',
  templateUrl: './other-services.page.html',
  styleUrls: ['./other-services.page.scss'],
})
export class OtherServicesPage implements OnInit {
	otherServices:any;
  constructor(public authService: AuthService, 
              public alertService: AlertService, 
              public loadingCtrl: LoadingController, 
              public alertCtrl: AlertController, 
              public navCtrl: NavController,
              public popoverCtrl: PopoverController,
              private router: Router) { }

  ngOnInit() {
	this.getServiceCat();	 
  }

  getServiceCat(){
	this.authService.getServiceCategory("14").subscribe(result=>{
		console.log(result);
		this.otherServices = result['data'].list;
	  });
  }

  back(){
    this.navCtrl.navigateBack('cust-home');
  }
}
