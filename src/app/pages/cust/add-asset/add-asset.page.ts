import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController,
  LoadingController
} from '@ionic/angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.page.html',
  styleUrls: ['./add-asset.page.scss'],
})
export class AddAssetPage implements OnInit {
	base64Image:string;
	base64Image1:string;
	base64Image2:string;

  public onAddAssetForm: FormGroup;

  constructor(private camera: Camera,
              public authService: AuthService, 
              public alertService: AlertService, 
              public loadingCtrl: LoadingController, 
              public alertCtrl: AlertController, 
              public navCtrl: NavController,
              public popoverCtrl: PopoverController,
              private router: Router,
              public http: HttpClient,
              private formBuilder: FormBuilder,
              ) { }

  ngOnInit() {
     this.onAddAssetForm = this.formBuilder.group({
      'productCategory': [null, Validators.required],
      'productName': [null, Validators.required],
      'productBrand': [null, Validators.required],
      'dateOfPurchase': [null, Validators.required],
      'monthsWarranty': [null, Validators.required],
      'productPrice': [null, Validators.required],
    });
  }

  addAsset(){
    console.log(this.onAddAssetForm.value);
  }

  openCam(){
    const options: CameraOptions = {
      quality: 10,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     //alert(imageData)
     this.base64Image='data:image/jpeg;base64,' + imageData;
     //(<any>window).Ionic.WebView.convertFileSrc(imageData);
    }, (err) => {
     // Handle error
     alert("error "+JSON.stringify(err))
    });
  }

  openGallery(){
  	 const options: CameraOptions = {
      quality: 10,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     //alert(imageData)
     this.base64Image=(<any>window).Ionic.WebView.convertFileSrc(imageData);//'data:image/jpeg;base64,' + imageData;
     					// 
    }, (err) => {
     // Handle error
     alert("error "+JSON.stringify(err))
    });
  }

  uploadImg(){
  	let url = "http://vaccrm.com/iglobe/CBA/api_v1/unwanted/image.php";
  	let postData = new FormData();
  	postData.append('file', this.base64Image);
  	let data: Observable<any> = this.http.post(url, postData);
  	data.subscribe((result) =>{
  		console.log(result);
  	});
  }

  openCam1(){
    const options: CameraOptions = {
      quality: 10,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     //alert(imageData)
     this.base64Image1='data:image/jpeg;base64,' + imageData;
     //(<any>window).Ionic.WebView.convertFileSrc(imageData);
    }, (err) => {
     // Handle error
     alert("error "+JSON.stringify(err))
    });
  }

  openGallery1(){
  	 const options: CameraOptions = {
      quality: 10,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     //alert(imageData)
     this.base64Image1=(<any>window).Ionic.WebView.convertFileSrc(imageData);//'data:image/jpeg;base64,' + imageData;
     					// 
    }, (err) => {
     // Handle error
     alert("error "+JSON.stringify(err))
    });
  }

  uploadImg1(){
  	let url = "http://vaccrm.com/iglobe/CBA/api_v1/unwanted/image.php";
  	let postData = new FormData();
  	postData.append('file', this.base64Image1);
  	let data: Observable<any> = this.http.post(url, postData);
  	data.subscribe((result) =>{
  		console.log(result);
  	});
  }

  openCam2(){
    const options: CameraOptions = {
      quality: 10,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     //alert(imageData)
     this.base64Image2='data:image/jpeg;base64,' + imageData;
     //(<any>window).Ionic.WebView.convertFileSrc(imageData);
    }, (err) => {
     // Handle error
     alert("error "+JSON.stringify(err))
    });
  }

  openGallery2(){
  	 const options: CameraOptions = {
      quality: 10,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     //alert(imageData)
     this.base64Image2=(<any>window).Ionic.WebView.convertFileSrc(imageData);//'data:image/jpeg;base64,' + imageData;
     					// 
    }, (err) => {
     // Handle error
     alert("error "+JSON.stringify(err))
    });
  }

  uploadImg2(){
  	let url = "http://vaccrm.com/iglobe/CBA/api_v1/unwanted/image.php";
  	let postData = new FormData();
  	postData.append('file', this.base64Image2);
  	let data: Observable<any> = this.http.post(url, postData);
  	data.subscribe((result) =>{
  		console.log(result);
  	});
  }
}
