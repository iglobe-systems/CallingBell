import { Component, OnInit  } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Pages } from './interfaces/pages';
import { AuthService } from './services/auth.service';
import { timer } from 'rxjs/observable/timer';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
// import { LottieSplashScreen } from '@ionic-native/lottie-splash-screen/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

   user: any;
  public appPages: Array<Pages>;
  userProfile: any;
  userInfo:any;
  showSplash = true;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
     public navCtrl: NavController,
    public authService: AuthService,
    private storage: NativeStorage
    // private lottie: LottieSplashScreen
  ) {
    this.appPages = [
      {
        title: 'Home',
        url: 'cust-home',
        direct: 'root',
        icon: 'ios-home',
      },
      {
        title:'Add Asset',
        url:'add-asset', 
        direct:'forward',
        icon: 'ios-add-circle-outline'
      },
      {
        title:'View Asset',
        url:'view-asset', 
        direct:'forward',
        icon: 'ios-eye'
      },
      {
        title:'Product Category',
        url:'trending', 
        direct:'forward',
        icon: 'ios-list'
      },
       {
        title: 'About',
        url: 'about',
        direct: 'forward',
        icon: 'ios-information-circle-outline'
      },
      {
        title:'Service Status',
        url:'service-status',
        direct:'forward',
        icon:'ios-construct'
      },
      ];
    this.initializeApp();
  }

initializeApp() {
    this.platform.ready().then(() => {
      // console.log(this.storage.getItem('token'));

      //uncomment during build

      // this.userInfo = this.storage.getItem('user');
      // this.storage.getItem('user').then(data => {
      //   this.navCtrl.navigateRoot('cust-home');
      //   this.splashScreen.hide();
      // }, err =>{
      //   this.navCtrl.navigateRoot('cust-login');
      //   this.splashScreen.hide();
      // })
      // this.statusBar.styleDefault();
      
      this.splashScreen.hide();
      timer(3000).subscribe(()=> this.showSplash = false)
    }).catch(() => {});
  }

  ngOnInit() {
    //this.getUser();
  }

  getUser() {
    this.authService.getUserProfile().subscribe(data =>{
      console.log(data);
      this.user = data;
    });
  }

  goToEditProfile() {
      this.navCtrl.navigateForward('cust-profile');
  }

  logout() {
    this.authService.logout();
    this.navCtrl.navigateRoot('/');
  }

}
