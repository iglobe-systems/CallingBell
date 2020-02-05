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

import { SupportComponent } from '../../../components/support/support.component';
@Component({
  selector: 'app-prod-cat',
  templateUrl: './prod-cat.page.html',
  styleUrls: ['./prod-cat.page.scss'],
})
export class ProdCatPage implements OnInit {
	 prodCat:any;
  constructor(public authService: AuthService, 
              public alertService: AlertService, 
              public loadingCtrl: LoadingController, 
              public alertCtrl: AlertController, 
              public navCtrl: NavController,
              public popoverCtrl: PopoverController,
              private router: Router) { }

  ngOnInit() {
  	  this.productCategory();
  }

  productCategory(){
    this.authService.getProducts().subscribe(data =>{
      console.log(data);
      this.prodCat = data.message;
    });
  }


  async productList(p){
    let navigationExtras: NavigationExtras={
      state:{
        p:p
      }
    }
    this.router.navigate(['prod-subcat'],navigationExtras);
    console.log(p);
  }

  async notifications(ev: any,p:any) {
    const popover = await this.popoverCtrl.create({
      component: SupportComponent,
      componentProps:{
        p:p
      },
      event: ev,
      animated: true,
      showBackdrop: true
    });
    return await popover.present();
  }

  async openSupport(p) {
    const alert = await this.alertCtrl.create({
      header: 'Welcome to Support',
      message: 'Enter your Query',
      inputs: [
        {
          name: 'info',
          placeholder: 'Enter your query',
          type: 'text'
        },
        {
          name: 'category',
          value: p.categoryName,
          label: 'Category',
          disabled:true
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'submit',
          handler: async (data) => {
            console.log(data);
            const loader = await this.loadingCtrl.create({
              duration: 1000
            });

            loader.present();

            loader.onWillDismiss().then(async l => {
              console.log(data);
              // this.authService.sendCode(data.info).subscribe(result => {
              //   if (result['response']) {
              //     console.log(result);
              //     this.alertService.presentToast(result['msg']);
              //   } else {
              //     console.log(result);
              //     this.alertService.presentToast(result['msg']);
              //   }
              // });
              this.authService.postSupport(data).subscribe(result => {
                if (result['response']) {
                  console.log(result);
                  this.alertService.presentToast(result['message']);
                } else {
                  console.log(result);
                  this.alertService.presentToast(result['message']);
                }
              });
            });
          }
        }
      ]
    });
    await alert.present();
  }

 opencart(){
    this.navCtrl.navigateForward('cart');
  }

  back(){
    this.navCtrl.navigateBack('cust-home');
  }

  otherService(){
    this.navCtrl.navigateForward('other-services');
  }
}
