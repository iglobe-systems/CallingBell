import { Component, OnInit } from '@angular/core';
import { Product } from '../../../services/cart.service';
import { CartService } from '../../../services/cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  // selectedItems = [];
  // total = 0;
  // cart:any;

  cartList:any;
  constructor(
    private cartService: CartService,
    private modalCtrl: ModalController,
    private alertCtrl:AlertController,
    public authService: AuthService, 
    public alertService: AlertService, ) { }

  ngOnInit() {
    // this.cart = this.cartService.getCart();
    // console.log(this.cart);
    this.authService.getCartList().subscribe(result=>{
      console.log(result);
      this.cartList = result['data'];
    })
  }

  // decreaseCartItem(i){
  //   this.cartService.decreaseProduct(product);
  //     i.count-=1
  //   }

  // increaseCartItem(i){
  //     i.count +=1
  // }

  removeCartItem(i){
    this.authService.removeCartItem(i).subscribe(result=>{
      console.log(result);
      this.ngOnInit();
    });
  }

  getTotal(){
    return this.cartList.reduce((i,j) => i+j.product_detail.mrp * j.count,0);
  }

  close(){
    this.modalCtrl.dismiss();
  }

  async checkout() {
    let alert = await this.alertCtrl.create({
      header: 'Thanks for your Order!',
      message: 'We will deliver your order as soon as possible',
      buttons: ['OK']
    });
    alert.present().then(() => {
      this.modalCtrl.dismiss();
    });
  }
 
}
