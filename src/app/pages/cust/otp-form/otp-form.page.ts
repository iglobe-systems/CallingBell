import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AlertService } from 'src/app/services/alert.service';
import { Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-otp-form',
  templateUrl: './otp-form.page.html',
  styleUrls: ['./otp-form.page.scss'],
})
export class OtpFormPage implements OnInit {
  public onOtpForm: FormGroup;
  number:any;
  constructor(public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private storage: NativeStorage,
    private alertService: AlertService,
    private router: Router,
   private route:ActivatedRoute,
    ) { }

  ngOnInit() {
    this.getNumber();
    this.onOtpForm = this.formBuilder.group({
      'otp': [null, Validators.compose([
        Validators.required, Validators.maxLength(6),
      ])],
    });
  }

  getNumber(){
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.number = this.router.getCurrentNavigation().extras.state.number;
        console.log(this.number);
      }
  });
  }

  verifyOtp(){
    let phone = this.number.phone;
    let otp = this.onOtpForm.value.otp;
    this.authService.verifyOtp(phone,otp).subscribe(
      result=>{
          if(result['status'] == true){
          console.log(result);
          console.log(result['data'].api_key);
          this.storage.setItem('user',{
            token : result['data'].api_key,
            phone : result['data'].phone,
            user_id: result['data'].user_id,
            email:result['data'].email
          }).then(()=>{
              this.navCtrl.navigateRoot('cust-home');
          })
        }else{
          this.alertService.presentToast(result['message']);
        }
      }
    )
  }
}
