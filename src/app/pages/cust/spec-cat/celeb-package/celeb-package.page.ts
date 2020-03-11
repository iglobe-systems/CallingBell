import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-celeb-package',
  templateUrl: './celeb-package.page.html',
  styleUrls: ['./celeb-package.page.scss'],
})
export class CelebPackagePage implements OnInit {

  sliderOne: any;

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
  };
  public package=[
    {id:25,name:"Cakes",image_url:"assets/img/flaticon/package/party.png"},
    {id:26,name:"Personalised Card",image_url:"assets/img/flaticon/package/birthday-card.png"},
    {id:27,name:"Return Gifts",image_url:"assets/img/flaticon/package/gift.png"},
    {id:28,name:"Combo Packs",image_url:"assets/img/flaticon/package/gift-box.png"},
  ]
  constructor(public navCtrl: NavController,
               private router: Router) 
  {
                this.sliderOne =
                {
                  isBeginningSlide: true,
                  isEndSlide: false,
                  slidesItems: [
                    {id:200},{id:201}
                  ]
                };
  }

  ngOnInit() {
  }

  goToItems(service: any){
    console.log(service);
    let navigationExtras: NavigationExtras={
      state:{
        package:service
      }
    }
    this.router.navigate(['celeb-item'],navigationExtras);
  }

  back(){
    this.navCtrl.navigateBack('celeb');
  }

}


