import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';
import {
  NavController,
   NavParams,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController,
  LoadingController
} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { CartService } from '../../../services/cart.service';
import { ImageModalPage } from '../image-modal/image-modal.page';
import { BehaviorSubject } from 'rxjs';
import { CartPage } from '../cart/cart.page';

@Component({
  selector: 'app-prod-desc',
  templateUrl: './prod-desc.page.html',
  styleUrls: ['./prod-desc.page.scss'],
})
export class ProdDescPage implements OnInit {
	product:any;
	productDetail:any;
  images:any;
	slidesOptions2 = {
    slidesPerView:1.5
  };

  cart = [];
  items = [];
  // products=[];
  cardItemCount: BehaviorSubject<number>;

  constructor(private route:ActivatedRoute,
              public authService: AuthService, 
              public alertService: AlertService, 
              public loadingCtrl: LoadingController, 
              public alertCtrl: AlertController, 
              public navCtrl: NavController,
              private router: Router,
              private cartService: CartService,
              private modalCtrl: ModalController) { }

  ngOnInit() {
  	 this.getProducts();
     this.cart = this.cartService.getCart();
    // this.products = this.cartService.getProducts();
    this.cardItemCount = this.cartService.getCartItemCount();
  }

  getProducts(){
    this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.product = this.router.getCurrentNavigation().extras.state.prod.productId;
          // this.brand = this.router.getCurrentNavigation().extras.state.brand.brand;
          console.log(this.product);
          //console.log(this.brand);
          this.authService.getProductDesc(this.product).subscribe(result =>{
                console.log(result);
                this.productDetail = result['message'];
                this.images = result['image'];
                console.log(this.productDetail);
                console.log(this.images);
                // this.prod = result['message']
           });
        }
    });
  	
  }

  addToCart(product) {
    this.cartService.addProduct(product);
    console.log(product);
  }

  async opencart(){
    // this.navCtrl.navigateForward('cart');
    let modal = await this.modalCtrl.create({
      component: CartPage,
      cssClass:'cart-modal'
    });
    modal.present();
  }

  openPreview(img){
    this.modalCtrl.create({
      component:ImageModalPage,
      componentProps:{
        img:img
      }
    }).then(modal => modal.present());
  }

  back(){
    this.navCtrl.navigateBack('prod-subcat');
  }
}
