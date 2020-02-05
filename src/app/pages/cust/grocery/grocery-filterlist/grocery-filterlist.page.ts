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
import { ActivatedRoute } from '@angular/router';
import { CartPage } from '../../cart/cart.page';
@Component({
  selector: 'app-grocery-filterlist',
  templateUrl: './grocery-filterlist.page.html',
  styleUrls: ['./grocery-filterlist.page.scss'],
})
export class GroceryFilterlistPage implements OnInit {

  groceryList:any;
  groceryBrand:any;
  groceryQty:any;
  filteredList:any[];
  constructor(private route:ActivatedRoute,
    public authService: AuthService, 
    public alertService: AlertService, 
    public loadingCtrl: LoadingController, 
    public alertCtrl: AlertController, 
    public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    public modalCtrl:ModalController,
    private router: Router) { }

  ngOnInit() {
    this.filteredList = [];
    this.getFilteredList();
    this.getList();
  }

  getFilteredList(){
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.groceryList = this.router.getCurrentNavigation().extras.state.groceryList;
        this.groceryBrand = this.router.getCurrentNavigation().extras.state.groceryFilter.brandname;
        this.groceryQty = this.router.getCurrentNavigation().extras.state.groceryFilter.quantity;
        console.log(this.groceryBrand,this.groceryQty);
      }
  });
  }

  grocerydesc(desc){
 
    let navigationExtras: NavigationExtras={
      state:{
        groceryDesc:desc,
      }
    }
    this.router.navigate(['grocery-desc'],navigationExtras);
  }

  addToCart(product) {
    this.alertService.cartNote('1 item added to cart');
    let qty={
      "qty":"1"
    }
    let id={
      "id":product.id
    }
    this.authService.addToCart(qty,id).subscribe(result =>{
      console.log(result);
      });
  }
  
  async opencart(){
    let modal = await this.modalCtrl.create({
      component: CartPage,
      cssClass:'cart-modal'
    });
    modal.present();
  }

  getList(){
    let braname=this.groceryBrand;
    let qty=this.groceryQty;
      for (var list of this.groceryList){
        if((braname.indexOf(list.brand_name) > -1 || braname.length==0) && (qty.indexOf(list.quantity) > -1 || qty.length==0) ){
          this.filteredList.push(list);         
        }     
    } 
    console.log(this.filteredList);
  }


  back(){
    this.navCtrl.navigateBack('grocery-filter');
  }
}
