import { Component, OnInit } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController,
  LoadingController,
  NavParams
} from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router, NavigationExtras,ActivatedRoute  } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
})
export class SupportComponent implements OnInit {
public onSupportForm :FormGroup;
prodCat:any;
support:any;
pro:any;
issue:any;
cat:any;
  constructor(public authService: AuthService,
              private route:ActivatedRoute,
              private navParams:NavParams,  
              public alertService: AlertService, 
              public loadingCtrl: LoadingController, 
              public alertCtrl: AlertController, 
              public navCtrl: NavController,
              private formBuilder: FormBuilder, 
              private router: Router,
              private popoverctrl:PopoverController) { }

  ngOnInit() {
  	 	this.productCategory();
    this.getIssue();
    // this.pro=this.navParams.get('p');
    // console.log(this.pro.categoryName);
    this.onSupportForm = this.formBuilder.group({
      'issue': [null, Validators.compose([
        Validators.required,
      ])],
      'callMeNow':[null],
      'callMeTodayAt':[null],
      'callMeOn':[null],
      'callMeAt':[null]
    });
  }

getIssue(){
      this.pro=this.navParams.get('p');
    console.log(this.pro.categoryName);
    this.cat = this.pro.categoryName;
    this.authService.getIssue(this.cat).subscribe(result =>{
      console.log(result);
      this.support = result['message'];
      console.log(this.support);
    });
  }

 productCategory(){
    this.authService.getProducts().subscribe(data =>{
      console.log(data);
      this.prodCat = data.message;
    });
  }

   async sendSupport() {
    const loader = await this.loadingCtrl.create({
      duration: 1000
    });
    
    loader.present();
   loader.onWillDismiss().then(async l => {
    //   console.log(this.onRegisterForm.value);
    //   // this.navCtrl.navigateRoot('/home-results');
    // });
    console.log(this.onSupportForm.value);
    this.authService.postSupport(this.onSupportForm.value).subscribe(
      data => {
        console.log(data);
        if (data['response']) {
          this.alertService.presentToast(data['message']);
          this.navCtrl.navigateRoot('prod-cat');
        } else {
          this.alertService.presentToast(data['message']);
        }
      },
      error => {
        console.log(error);
      }
    );
  });
   await loader.present();
   await this.popoverctrl.dismiss();
  }

  
}
