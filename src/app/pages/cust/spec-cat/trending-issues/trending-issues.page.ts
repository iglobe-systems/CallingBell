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

import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-trending-issues',
  templateUrl: './trending-issues.page.html',
  styleUrls: ['./trending-issues.page.scss'],
})
export class TrendingIssuesPage implements OnInit {
  plumbing:any;
  constructor(public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public authService: AuthService,
    public loadingCtrl: LoadingController,
    private alertService: AlertService,
    public router: Router) { }

  ngOnInit() {
    this.plumbing=[
      {"name":"Basin & Sink","img":"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_30/categories/category_v2/category_70442750.png"},
      {"name":"Basin & Sink","img":"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_30/categories/category_v2/category_70442750.png"},
      {"name":"Basin & Sink","img":"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_30/categories/category_v2/category_70442750.png"},
      {"name":"Basin & Sink","img":"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_30/categories/category_v2/category_70442750.png"},
      {"name":"Basin & Sink","img":"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_30/categories/category_v2/category_70442750.png"},
      {"name":"Basin & Sink","img":"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_30/categories/category_v2/category_70442750.png"},
    ]
  }

  back(){
    this.navCtrl.navigateBack('cust-home');
  }
}
