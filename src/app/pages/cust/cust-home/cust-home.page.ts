import { Component, OnInit, ViewChild } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController,
  LoadingController} from '@ionic/angular';

import { SupportComponent } from '../../../components/support/support.component';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
//Slides
import{ IonSlides} from '@ionic/angular';

import anime from 'animejs/lib/anime.es.js';

import { Router, NavigationExtras } from '@angular/router';
import { Icon } from 'ionicons/dist/types/icon/icon';
import { CartPage } from '../cart/cart.page';
@Component({
  selector: 'app-cust-home',
  templateUrl: './cust-home.page.html',
  styleUrls: ['./cust-home.page.scss'],
})
export class CustHomePage implements OnInit {
	// @ViewChild('slideWithNav') slideWithNav: IonSlides;
  sliderOne: any;
  sliderTwo: any;

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1.4,
    autoplay:true
  };

  slideOptsTwo = {
    initialSlide: 0,
    slidesPerView: 1.5,
    autoplay:true,
    grabCursor: true,
    
  };

  searchKey = '';
  yourLocation = '123 Test Street';
  themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';
  userInfo: any;
  user:any;
  products: Object;
  productCategory: Object;
  Icons:any;



  constructor( public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public authService: AuthService,
    public loadingCtrl: LoadingController,
    private alertService: AlertService,
    public router: Router,
    ) 
  {
    this.sliderOne =
      {
        isBeginningSlide: true,
        isEndSlide: false,
        slidesItems: [
          {id:1},{id:2},{id:3},{id:4}
        ]
      };

      this.sliderTwo =
      {
        isBeginningSlide: true,
        isEndSlide: false,
        slidesItems: [
          {id: 103},{id: 100},{id: 101},{id: 102},{id: 104},{id: 105},{id: 106},
          {id: 1},{id: 2},{id: 3},{id: 4},{id: 5},{id: 6},{id: 7},{id: 8},{id: 9}
        ]
      };
      
     }

     

    ngOnInit() {
   // this.userInfo = this.authService.getUserDetail();
   // console.log(this.userInfo['__zone_symbol__value']['user_name']);
   //this.getProducts();
   // this.getProductCategory();
   this.getUser();
   this.getIcons();
  }

  getIcons(){
    this.authService.getHomeIcons().subscribe(result =>{
      console.log(result);
      this.Icons = result['data'];
    })
  }


  goToCategory(icon){
    if(icon.id == "17" && icon.type == "products_cat"){
      this.navCtrl.navigateForward('groceries');
    }
    else if (icon.id == "7" && icon.type == "services_cat"){
      this.navCtrl.navigateForward('medical');
    }
    else if(icon.id == "1" && icon.type == "services_cat"){
      this.navCtrl.navigateForward('celeb');
    }
    else if(icon.id == "42" && icon.type == "products_cat"){
      this.navCtrl.navigateForward('pooja');
    }
    else if(icon.id == "91" && icon.type == "services_cat"){
      this.navCtrl.navigateForward('trending');
    }
    else if(icon.id == "14" && icon.type == "services_cat"){
      this.navCtrl.navigateForward('other-services');
    }
    else if(icon.id == "45" && icon.type == "services_cat"){
      this.navCtrl.navigateForward('insurance');
    }
    else if(icon.id == "58" && icon.type == "services_cat"){
      this.navCtrl.navigateForward('family-card');
    }
    else if(icon.id == "66" && icon.type == "services_cat"){
      this.navCtrl.navigateForward('remainders');
    }
    else if(icon.id == "73" && icon.type == "services_cat"){
      this.navCtrl.navigateForward('docs');
    }
    else if(icon.id == "57" && icon.type == "services_cat"){
      this.alertService.developmentNote('Under Development! Our developers need more caffeine!');
    }
    else if(icon.id == "80" && icon.type == "services_cat"){
      this.alertService.developmentNote('Under Development! Our developers need more caffeine!');
    }
    else if(icon.id == "81" && icon.type == "services_cat"){
      this.alertService.developmentNote('Under Development! Our developers need more caffeine!');
    }
    else if(icon.id == "82" && icon.type == "services_cat"){
      this.alertService.developmentNote('Under Development! Our developers need more caffeine!');
    }
    else if(icon.id == "83" && icon.type == "services_cat"){
      this.alertService.developmentNote('Under Development! Our developers need more caffeine!');
    }    
    else if(icon.id == "84" && icon.type == "services_cat"){
      this.alertService.developmentNote('Under Development! Our developers need more caffeine!');
    }
    else{
      this.navCtrl.navigateForward('pest-control');
    }
  }

  async opencart(){
    let modal = await this.modalCtrl.create({
      component: CartPage,
      cssClass:'cart-modal'
    });
    modal.present();
  }

  getProducts() {
    this.authService.getProducts().subscribe(result => {
      console.log(result);
      this.products = result['user']['products'];
    });
  }

  
  getUser() {
    this.authService.getUserProfile().subscribe(data =>{
      console.log(data);
      this.user = data.message[0];
      console.log(this.user);
    });
  }
  
  // getProductCategory(){
  //   this.authService.getProductCategory().subscribe(result =>{
  //     console.log(result);
  //     this.productCategory = result['msg'];
  //   });
  // }

  // goToProdDesc(){
  //     this.navCtrl.navigateForward('product-desc');
  // }

  goToProducts() {
    this.navCtrl.navigateForward('prod-cat');
  }

  news(){
    this.navCtrl.navigateForward('news');
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  // settings() {
  //   this.navCtrl.navigateForward('settings');
  // }

  async alertLocation() {
    const changeLocation = await this.alertCtrl.create({
      header: 'Change Location',
      message: 'Type your Address.',
      inputs: [
        {
          name: 'location',
          placeholder: 'Enter your new Location',
          type: 'text'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Change',
          handler: async (data) => {
            console.log('Change clicked', data);
            this.yourLocation = data.location;
            const toast = await this.toastCtrl.create({
              message: 'Location was change successfully',
              duration: 3000,
              position: 'top',
              closeButtonText: 'OK',
              showCloseButton: true
            });

            toast.present();
          }
        }
      ]
    });
    changeLocation.present();
  }

  // async searchFilter () {
  //   const modal = await this.modalCtrl.create({
  //     component: SearchFilterPage
  //   });
  //   return await modal.present();
  // }

  // async presentImage(image: any) {
  //   const modal = await this.modalCtrl.create({
  //     component: ImagePage,
  //     componentProps: { value: image }
  //   });
  //   return await modal.present();
  // }

  async notifications(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: SupportComponent,
      event: ev,
      animated: true,
      showBackdrop: true
    });
    return await popover.present();
  }

  viewAsset(){
     this.navCtrl.navigateForward('view-asset');
  }

   addAsset(){
     this.navCtrl.navigateForward('add-asset');
  }

  callSupport(){
    this.alertService.presentToast("Our Call Center Executive will reach you in your registered mobile number!");
  }

}
