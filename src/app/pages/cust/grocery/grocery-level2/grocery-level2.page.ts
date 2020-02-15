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
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CartPage } from '../../cart/cart.page';
@Component({
  selector: 'app-grocery-level2',
  templateUrl: './grocery-level2.page.html',
  styleUrls: ['./grocery-level2.page.scss'],
})
export class GroceryLevel2Page implements OnInit {
categoryId:any;
categoryName:any;
groceryCat:any;
groceryFilter:any;

public onQtyForm:FormGroup;
qty:any;
  constructor(
    private route:ActivatedRoute,
    public authService: AuthService, 
    public alertService: AlertService, 
    public loadingCtrl: LoadingController, 
    public alertCtrl: AlertController, 
    public modalCtrl:ModalController,
    public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.onQtyForm = this.formBuilder.group({
      'qty':['', Validators.required]
    });
    this.getGrocerylt();
  }

  getGrocerylt(){
    this.route.queryParams.subscribe(params => {
       if (this.router.getCurrentNavigation().extras.state) {
         this.categoryId = this.router.getCurrentNavigation().extras.state.catId.id;
         this.categoryName = this.router.getCurrentNavigation().extras.state.catId.name;
          this.authService.getProdslt(this.categoryId).subscribe(result => {
            console.log(result);
          this.groceryCat = result['data'].list;
             console.log(this.groceryCat);
          this.groceryFilter = result['data'].filter;
             console.log(this.groceryFilter);
           });
       }
   });
  } 
  addToCart(product) {
    if(this.onQtyForm.get('qty').touched){
      this.alertService.cartNote('1 item added to cart');
    }else{
      this.alertService.cartNote('Please select quantity');
    }
    
    // let qty={
    //   "qty":"1"
    // }
    console.log(this.onQtyForm.value);
    this.authService.addToCart(this.onQtyForm.value,product).subscribe(result =>{
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

  groFilter(){
    let navigationExtras: NavigationExtras={
      state:{
        groceryFil:this.groceryFilter,
        groceryList:this.groceryCat
      }
    }
    this.router.navigate(['grocery-filter'],navigationExtras);
  }

  grocerydesc(desc){
 
    let navigationExtras: NavigationExtras={
      state:{
        groceryDesc:desc,
      }
    }
    this.router.navigate(['grocery-desc'],navigationExtras);
  }

  back(){
    this.navCtrl.navigateBack('groceries');
  }
}
