import { Component, OnInit } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController,
  LoadingController} from '@ionic/angular';

import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';

import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-trending-issues',
  templateUrl: './trending-issues.page.html',
  styleUrls: ['./trending-issues.page.scss'],
})
export class TrendingIssuesPage implements OnInit {
  serviceId:any;
  serviceSC:any;
  constructor(public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public authService: AuthService,
    public loadingCtrl: LoadingController,
    private alertService: AlertService,
    public router: Router,
    private route:ActivatedRoute,) { }

  ngOnInit() {
    this.getIssues();
  }

  getIssues(){
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.serviceId = this.router.getCurrentNavigation().extras.state.service.id;
         this.authService.getServiceCategory(this.serviceId).subscribe(result => {
           console.log(result);
           this.serviceSC = result['data'].list;
           console.log(this.serviceSC);
          });
      }
  });
  }

  goToIssueList(service){
    let navigationExtras: NavigationExtras={
      state:{
        service:service
      }
    }
    this.router.navigate(['issue-list'],navigationExtras);
    console.log(service);
  }

  back(){
    this.navCtrl.navigateBack('trending');
  }
}
