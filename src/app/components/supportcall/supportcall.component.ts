import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-supportcall',
  templateUrl: './supportcall.component.html',
  styleUrls: ['./supportcall.component.scss'],
})
export class SupportcallComponent implements OnInit {
  public onSupportForm :FormGroup;
  constructor(private formBuilder: FormBuilder,
              public loadingCtrl: LoadingController, 
              private popoverctrl:PopoverController,
              public alertService: AlertService,) { }

  ngOnInit() {
    this.onSupportForm = this.formBuilder.group({
        'callMeNow':[null],
        'callMeTodayAt':[null],
        'callMeOn':[null],
        'callMeAt':[null]
      });
  }

  async sendSupport() {
    const loader = await this.loadingCtrl.create({
      duration: 1000
    });
    
    loader.present();
   loader.onWillDismiss().then(async l => {
    console.log(this.onSupportForm.value);
  });
   await loader.present();
   await this.popoverctrl.dismiss();
   this.alertService.presentToast("We have received your request! Our Customer Relationship Executive will reach you!");
  }

}
