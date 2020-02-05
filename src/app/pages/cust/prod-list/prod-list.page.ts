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

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.page.html',
  styleUrls: ['./prod-list.page.scss'],
})
export class ProdListPage implements OnInit {
  cat:any;
  prodlist:any;
  brands:any;
  brand:any;
  products:any;

    cart = [];
     items = [];
 
  constructor(private route:ActivatedRoute,
              public authService: AuthService, 
              public alertService: AlertService, 
              public loadingCtrl: LoadingController, 
              public alertCtrl: AlertController, 
              public navCtrl: NavController,
              private router: Router,
              private cartService: CartService) { }

  ngOnInit() {
  	// this.items = this.getProducts();
    this.getProducts();
    this.cart = this.cartService.getCart();
    // this.items = this.cartService.getProducts();
  }

  addToCart(product) {
    this.cartService.addProduct(product);
  }
 
  openCart() {
    this.router.navigate(['cart']);
  }

   getProducts(){
     this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.cat = this.router.getCurrentNavigation().extras.state.prodcat;
          this.brand = this.router.getCurrentNavigation().extras.state.brand;
          console.log(this.cat);
          console.log(this.brand);
          this.authService.getProductList(this.cat,this.brand).subscribe(result =>{
                console.log(result);
                this.prodlist = result['message'];
                console.log(this.prodlist);
                // this.prod = result['message']
           });
        }
    });
    
  }

  // showProducts(brand){
  //   this.brand = brand.brand;
  //   console.log(brand.brand);
  //   this.authService.getProductList(this.brand,this.pro).subscribe(result =>{
  //     console.log(result);
  //    this.products = result['message'];
  //   });
  // }


getProductDesc(prod){
    let navigationExtras : NavigationExtras={
      state:{
        prod:prod
      }
    }
    this.router.navigate(['prod-desc'],navigationExtras);
    console.log(prod);
  }
  
  back(){
    this.navCtrl.navigateBack('prod-subcat');
  }
}
