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




@Component({
  selector: 'app-prod-subcat',
  templateUrl: './prod-subcat.page.html',
  styleUrls: ['./prod-subcat.page.scss'],
})
export class ProdSubcatPage implements OnInit {
  defImg = "http://kmvn.in/uploads/imagenot.png";
	pro:any;
  subCategory:Array<any>;
  brand:any;
  constructor(private route:ActivatedRoute,
              public authService: AuthService, 
              public alertService: AlertService, 
              public loadingCtrl: LoadingController, 
              public alertCtrl: AlertController, 
              public navCtrl: NavController,
              private router: Router,
              public modalCtrl: ModalController) { }

  ngOnInit() {

    this.getSubCategory();
  }

    getSubCategory(){
     this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.pro = this.router.getCurrentNavigation().extras.state.p.categoryName;
          
       
          this.authService.getProductSubCategory(this.pro).subscribe(result =>{
               console.log(result);
               this.subCategory = result['message'].subcategory;
               console.log(this.subCategory);
               this.brand = result['message'].brands;
          });

        }
    });
     
  }


     productList(subCat){
    let navigationExtras: NavigationExtras={
      state:{
        subCat:subCat,
        prodcat: this.pro
      }
    }
    this.router.navigate(['prod-latest-arrivals'],navigationExtras);
    console.log(subCat);
  }

  prodlist(brand){
     let navigationExtras: NavigationExtras={
      state:{
        brand:brand,
        prodcat: this.pro
      }
    }
    this.router.navigate(['prod-list'],navigationExtras);
    console.log(brand);
  }


 opencart(){
    this.navCtrl.navigateForward('cart');
  }

  back(){
    this.navCtrl.navigateBack('trending');
  }
}
